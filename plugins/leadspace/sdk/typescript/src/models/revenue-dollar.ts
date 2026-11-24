import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RevenueDollar = {
  exact?: number;
  range?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const revenueDollarSchema: Schema<RevenueDollar> = s.object<RevenueDollar>(
  {
    exact: s.optional(s.float64()),
    range: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
