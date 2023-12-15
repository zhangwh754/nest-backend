import { Body, Controller, Post } from '@nestjs/common'
import { Post as PostModel } from '@prisma/client'
import { PostService } from './post.service'
import { CreateDraftDto } from './dto/create-draft.dto'

@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('post')
  async createDraft(@Body() postData: CreateDraftDto): Promise<PostModel> {
    const { title, content, authorEmail } = postData
    return this.postService.createPost({
      title,
      content,
      author: {
        connect: { email: authorEmail },
      },
    })
  }
}
