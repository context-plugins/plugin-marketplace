import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SearchKeyword = {
  /** The lowercase query a customer typed to find the business. */
  searchKeyword: string;
  /**
   * Exact number of unique users, when Google discloses it. Null when `threshold` is returned
   * instead.
   */
  value?: number | null;
  /**
   * Returned for low-volume keywords instead of `value`: the real count is below this number.
   * Ignoring it drops the long tail.
   */
  threshold?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchKeywordSchema: Schema<SearchKeyword> = s.object<SearchKeyword>(
  {
    searchKeyword: s.string(),
    value: s.optionalNullable(s.float64()),
    threshold: s.optionalNullable(s.float64()),
  },
  { additionalProperties: s.json() },
);
