import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Record3 = {
  /**
   * keys are column identifiers, and values are [cell
   * values](https://support.getgrist.com/code/modules/GristData/#cellvalue) we want to have in
   * those columns (either by matching with an existing record, or creating a new record)
   */
  require: Record<string, unknown>;
  /**
   * keys are column identifiers, and values are [cell
   * values](https://support.getgrist.com/code/modules/GristData/#cellvalue) to place in those
   * columns (either overwriting values in an existing record, or in a new record)
   */
  fields?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const record3Schema: Schema<Record3> = s.object<Record3>(
  {
    require: s.record(s.string(), s.unknown()),
    fields: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
