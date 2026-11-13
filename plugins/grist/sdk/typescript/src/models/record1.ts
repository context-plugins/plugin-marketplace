import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Record1 = {
  /**
   * A JSON object mapping column names to [cell
   * values](https://support.getgrist.com/code/modules/GristData/#cellvalue).
   */
  fields: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const record1Schema: Schema<Record1> = s.object<Record1>(
  {
    fields: s.record(s.string(), s.unknown()),
  },
  { additionalProperties: s.json() },
);
