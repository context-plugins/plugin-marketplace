import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { searchFilterIosSchema, type SearchFilterIos } from "./search-filter-ios.js";

export type IosSummarySearchBody = {
  /** Query */
  q?: string;
  filter: SearchFilterIos;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const iosSummarySearchBodySchema: Schema<IosSummarySearchBody> = s.object<IosSummarySearchBody>(
  {
    q: s.optional(s.string()),
    filter: searchFilterIosSchema,
  },
  { additionalProperties: s.json() },
);
