import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Fields1 = {
  /** Set to a new value to rename the table */
  tableId?: string;
  /** Whether the table should use on-demand loading */
  onDemand?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fields1Schema: Schema<Fields1> = s.object<Fields1>(
  {
    tableId: s.optional(s.string()),
    onDemand: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
