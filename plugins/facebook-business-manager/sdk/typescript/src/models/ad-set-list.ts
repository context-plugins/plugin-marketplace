import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { adSetInternalSchema, adSetSchema, type AdSet } from "./ad-set.js";
import { pagingSchema, type Paging } from "./paging.js";

export type AdSetList = {
  data?: AdSet[];
  paging?: Paging;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const adSetListProperties: s.Shape<AdSetList> = {
  data: s.optional(s.array(s.lazy(() => adSetInternalSchema))),
  paging: s.optional(s.lazy(() => pagingSchema)),
};

export const adSetListInternalSchema: Schema<AdSetList> = s.object<AdSetList>(adSetListProperties, {
  additionalProperties: s.json(),
});

export const adSetListSchema: Schema<AdSetList> = s.lazySchema(() =>
  s.object<AdSetList>(
    {
      ...adSetListProperties,
      data: s.optional(s.array(s.lazy(() => adSetSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
