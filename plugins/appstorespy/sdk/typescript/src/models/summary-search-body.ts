import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { searchFilterPlaySchema, type SearchFilterPlay } from "./search-filter-play.js";

export type SummarySearchBody = {
  /** Query */
  q?: string;
  filter: SearchFilterPlay;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const summarySearchBodySchema: Schema<SummarySearchBody> = s.object<SummarySearchBody>(
  {
    q: s.optional(s.string()),
    filter: searchFilterPlaySchema,
  },
  { additionalProperties: s.json() },
);
