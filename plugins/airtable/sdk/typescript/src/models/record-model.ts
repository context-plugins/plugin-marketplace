import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An Airtable record representing a single row in a table. */
export type RecordModel = {
  /** The unique identifier of the record (starts with 'rec'). */
  id: string;
  /** The time when the record was created in ISO 8601 format. */
  createdTime: Date;
  /**
   * A mapping of field names (or field IDs when returnFieldsByFieldId is true) to their cell
   * values. The structure depends on the field types defined in the table schema.
   */
  fields: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recordModelSchema: Schema<RecordModel> = s.object<RecordModel>(
  {
    id: s.string(),
    createdTime: s.dateTime(),
    fields: s.record(s.string(), s.unknown()),
  },
  { additionalProperties: s.json() },
);
