import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { adSchema, type Ad } from "./ad.js";
import { pagingSchema, type Paging } from "./paging.js";

export type AdList = {
  data?: Ad[];
  paging?: Paging;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adListSchema: Schema<AdList> = s.object<AdList>(
  {
    data: s.optional(s.array(s.lazy(() => adSchema))),
    paging: s.optional(s.lazy(() => pagingSchema)),
  },
  { additionalProperties: s.json() },
);
