import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { baseSummarySchema, type BaseSummary } from "./base-summary.js";

/** A paginated list of bases accessible to the authenticated user. */
export type BaseList = {
  bases: BaseSummary[];
  /** Pagination cursor for the next page of results. */
  offset?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const baseListSchema: Schema<BaseList> = s.object<BaseList>(
  {
    bases: s.array(s.lazy(() => baseSummarySchema)),
    offset: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
