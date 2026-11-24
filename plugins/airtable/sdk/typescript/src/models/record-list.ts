import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { recordModelSchema, type RecordModel } from "./record-model.js";

/** A paginated list of records from a table. */
export type RecordList = {
  records: RecordModel[];
  /**
   * A pagination cursor. If present, pass this value in the offset query parameter to fetch the
   * next page of results.
   */
  offset?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recordListSchema: Schema<RecordList> = s.object<RecordList>(
  {
    records: s.array(s.lazy(() => recordModelSchema)),
    offset: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
