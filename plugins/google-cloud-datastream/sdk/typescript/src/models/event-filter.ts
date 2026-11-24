import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Represents a filter for included data on a stream object. */
export type EventFilter = {
  /**
   * An SQL-query Where clause selecting which data should be included, not including the "WHERE"
   * keyword. e.g., `t.key1 = 'value1' AND t.key2 = 'value2'`
   */
  sqlWhereClause?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventFilterSchema: Schema<EventFilter> = s.object<EventFilter>(
  {
    sqlWhereClause: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
