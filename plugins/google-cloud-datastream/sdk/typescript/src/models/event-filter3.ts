import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Output only. The filter for performing a partial backfill. */
export type EventFilter3 = {
  /**
   * An SQL-query Where clause selecting which data should be included, not including the "WHERE"
   * keyword. e.g., `t.key1 = 'value1' AND t.key2 = 'value2'`
   */
  sqlWhereClause?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventFilter3Schema: Schema<EventFilter3> = s.object<EventFilter3>(
  {
    sqlWhereClause: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
