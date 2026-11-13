import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RecordModel = {
  id: number;
  /**
   * A JSON object mapping column names to [cell
   * values](https://support.getgrist.com/code/modules/GristData/#cellvalue).
   */
  fields: Record<string, unknown>;
  /**
   * Included only when the record has formula errors. Maps the name of each column with an error to
   * the name of the exception; the value in `fields` is then `null`. See [Grist data
   * format](https://github.com/gristlabs/grist-core/blob/main/documentation/grist-data-format.md).
   */
  errors?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recordModelSchema: Schema<RecordModel> = s.object<RecordModel>(
  {
    id: s.float64(),
    fields: s.record(s.string(), s.unknown()),
    errors: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
