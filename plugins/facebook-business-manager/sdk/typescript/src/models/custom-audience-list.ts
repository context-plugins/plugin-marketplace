import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customAudienceSchema, type CustomAudience } from "./custom-audience.js";
import { pagingSchema, type Paging } from "./paging.js";

export type CustomAudienceList = {
  data?: CustomAudience[];
  paging?: Paging;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customAudienceListSchema: Schema<CustomAudienceList> = s.object<CustomAudienceList>(
  {
    data: s.optional(s.array(s.lazy(() => customAudienceSchema))),
    paging: s.optional(s.lazy(() => pagingSchema)),
  },
  { additionalProperties: s.json() },
);
