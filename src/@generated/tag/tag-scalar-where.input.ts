import { Field, InputType } from '@nestjs/graphql';

import { ArticleFilter } from '../article/article-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType({})
export class TagScalarWhereInput {
    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    id?: StringFilter | null;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    name?: StringFilter | null;

    @Field(() => ArticleFilter, {
        nullable: true,
        description: undefined,
    })
    articles?: ArticleFilter | null;

    @Field(() => [TagScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    AND?: TagScalarWhereInput[] | null;

    @Field(() => [TagScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    OR?: TagScalarWhereInput[] | null;

    @Field(() => [TagScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    NOT?: TagScalarWhereInput[] | null;
}
