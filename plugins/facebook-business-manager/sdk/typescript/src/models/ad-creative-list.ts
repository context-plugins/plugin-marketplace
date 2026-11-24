import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { adCreativeInternalSchema, adCreativeSchema, type AdCreative } from "./ad-creative.js";
import { pagingSchema, type Paging } from "./paging.js";

export type AdCreativeList = {
  data?: AdCreative[];
  paging?: Paging;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const adCreativeListProperties: s.Shape<AdCreativeList> = {
  data: s.optional(s.array(s.lazy(() => adCreativeInternalSchema))),
  paging: s.optional(s.lazy(() => pagingSchema)),
};

export const adCreativeListInternalSchema: Schema<AdCreativeList> = s.object<AdCreativeList>(
  adCreativeListProperties,
  { additionalProperties: s.json() },
);

export const adCreativeListSchema: Schema<AdCreativeList> = s.lazySchema(() =>
  s.object<AdCreativeList>(
    {
      ...adCreativeListProperties,
      data: s.optional(s.array(s.lazy(() => adCreativeSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
