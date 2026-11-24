import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fundResourceSchema, type FundResource } from "./fund-resource.js";
import { linksSchema, type Links } from "./links.js";
import { metaInternalSchema, metaSchema, type Meta } from "./meta.js";

export type V1FundsResponse = {
  data: FundResource[];
  links: Links;
  meta: Meta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1FundsResponseProperties: s.Shape<V1FundsResponse> = {
  data: s.array(s.lazy(() => fundResourceSchema)),
  links: linksSchema,
  meta: metaInternalSchema,
};

export const v1FundsResponseInternalSchema: Schema<V1FundsResponse> = s.object<V1FundsResponse>(
  v1FundsResponseProperties,
  { additionalProperties: s.json() },
);

export const v1FundsResponseSchema: Schema<V1FundsResponse> = s.lazySchema(() =>
  s.object<V1FundsResponse>(
    {
      ...v1FundsResponseProperties,
      meta: metaSchema,
    },
    { additionalProperties: s.json() },
  ),
);
