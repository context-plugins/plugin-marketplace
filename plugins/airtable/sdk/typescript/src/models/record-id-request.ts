import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RecordIdRequest = {
  /**
   * A mapping of field names (or field IDs when returnFieldsByFieldId is true) to their cell
   * values. The structure depends on the field types defined in the table schema.
   */
  fields: Record<string, unknown>;
  /** If true, the API will attempt to convert string values to the appropriate cell value type. */
  typecast?: boolean;
  returnFieldsByFieldId?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recordIdRequestSchema: Schema<RecordIdRequest> = s.object<RecordIdRequest>(
  {
    fields: s.record(s.string(), s.unknown()),
    typecast: s.optional(s.boolean()),
    returnFieldsByFieldId: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
