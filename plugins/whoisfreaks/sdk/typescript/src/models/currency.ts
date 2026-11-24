import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Currency = {
  code?: string;
  name?: string;
  symbol?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const currencySchema: Schema<Currency> = s.object<Currency>(
  {
    code: s.optional(s.string()),
    name: s.optional(s.string()),
    symbol: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
