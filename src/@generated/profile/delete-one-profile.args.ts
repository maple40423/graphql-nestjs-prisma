import { ArgsType, Field } from '@nestjs/graphql';

import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@ArgsType()
export class DeleteOneProfileArgs {
    @Field(() => ProfileWhereUniqueInput, { nullable: false })
    where!: ProfileWhereUniqueInput;
}
