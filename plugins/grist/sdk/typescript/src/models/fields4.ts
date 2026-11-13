import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Fields4 = {
  /** Row ID of the table in the _grist_Tables metadata table */
  tableRef?: number;
  /** Whether the table uses on-demand loading */
  onDemand?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fields4Schema: Schema<Fields4> = s.object<Fields4>(
  {
    tableRef: s.optional(s.int()),
    onDemand: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
