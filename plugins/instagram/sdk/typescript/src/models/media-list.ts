import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mediaSchema, type Media } from "./media.js";
import { pagingSchema, type Paging } from "./paging.js";

export type MediaList = {
  data?: Media[];
  paging?: Paging;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mediaListSchema: Schema<MediaList> = s.object<MediaList>(
  {
    data: s.optional(s.array(s.lazy(() => mediaSchema))),
    paging: s.optional(s.lazy(() => pagingSchema)),
  },
  { additionalProperties: s.json() },
);
