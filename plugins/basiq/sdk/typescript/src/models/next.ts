import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Next = {
  /** Next frequency date */
  date?: string;
  /** Next frequency amount */
  amount?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const nextSchema: Schema<Next> = s.object<Next>(
  {
    date: s.optional(s.dateOnly()),
    amount: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
