import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreditGrantCurrency = {
  /** Stable machine-readable key for this credit currency. */
  key: string;
  /** Human-readable name for this credit currency. */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const creditGrantCurrencySchema: Schema<CreditGrantCurrency> = s.object<CreditGrantCurrency>(
  {
    key: s.string(),
    name: s.string(),
  },
  { additionalProperties: s.json() },
);
