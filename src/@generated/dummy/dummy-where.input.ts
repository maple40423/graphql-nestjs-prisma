import { Field, InputType } from '@nestjs/graphql';

import { BigIntFilter } from '../prisma/big-int-filter.input';
import { BytesFilter } from '../prisma/bytes-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class DummyWhereInput {
    @Field(() => [DummyWhereInput], {
        nullable: true,
    })
    AND?: Array<DummyWhereInput>;

    @Field(() => [DummyWhereInput], {
        nullable: true,
    })
    OR?: Array<DummyWhereInput>;

    @Field(() => [DummyWhereInput], {
        nullable: true,
    })
    NOT?: Array<DummyWhereInput>;

    @Field(() => StringFilter, {
        nullable: true,
    })
    id?: StringFilter;

    @Field(() => FloatFilter, {
        nullable: true,
    })
    floaty?: FloatFilter;

    @Field(() => IntFilter, {
        nullable: true,
    })
    int?: IntFilter;

    @Field(() => FloatFilter, {
        nullable: true,
    })
    float?: FloatFilter;

    @Field(() => BytesFilter, {
        nullable: true,
    })
    bytes?: BytesFilter;

    @Field(() => DecimalFilter, {
        nullable: true,
    })
    decimal?: DecimalFilter;

    @Field(() => BigIntFilter, {
        nullable: true,
    })
    bigInt?: BigIntFilter;

    @Field(() => JsonFilter, {
        nullable: true,
    })
    json?: JsonFilter;
}
