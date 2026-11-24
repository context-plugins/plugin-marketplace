import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Card payment default values for BILL operations. */
export type CardAccountDefaults = {
  payables?: boolean;
  receivables?: boolean;
  funding?: boolean;
  disbursement?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cardAccountDefaultsSchema: Schema<CardAccountDefaults> = s.object<CardAccountDefaults>(
  {
    payables: s.optional(s.boolean()),
    receivables: s.optional(s.boolean()),
    funding: s.optional(s.boolean()),
    disbursement: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
