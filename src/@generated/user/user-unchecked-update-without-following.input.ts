import { Field, Float, InputType, Int } from '@nestjs/graphql';

import { ArticleUpdateManyWithoutAuthorInput } from '../article/article-update-many-without-author.input';
import { CommentUpdateManyWithoutAuthorInput } from '../comment/comment-update-many-without-author.input';
import { Role } from '../prisma/role.enum';

@InputType()
export class UserUncheckedUpdateWithoutFollowingInput {
    @Field(() => String, {
        nullable: true,
    })
    id?: string;

    @Field(() => String, {
        nullable: true,
    })
    email?: string;

    @Field(() => String, {
        nullable: true,
    })
    name?: string;

    @Field(() => String, {
        nullable: true,
    })
    password?: string;

    @Field(() => String, {
        nullable: true,
    })
    bio?: string;

    @Field(() => String, {
        nullable: true,
    })
    image?: string;

    @Field(() => Int, {
        nullable: true,
    })
    countComments?: number;

    @Field(() => Float, {
        nullable: true,
    })
    rating?: number;

    @Field(() => Role, {
        nullable: true,
    })
    role?: Role;

    @Field(() => ArticleUpdateManyWithoutAuthorInput, {
        nullable: true,
    })
    articles?: ArticleUpdateManyWithoutAuthorInput;

    @Field(() => CommentUpdateManyWithoutAuthorInput, {
        nullable: true,
    })
    comments?: CommentUpdateManyWithoutAuthorInput;
}
