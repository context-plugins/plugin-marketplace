import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Currency = {
  id?: string;
  code?: string;
  displayName?: string;
  symbol?: string;
  amountDecimalPlaces?: string;
  amountRoundingPrecision?: number;
  lastModifiedDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const currencyProperties: s.Shape<Currency> = {
  id: s.optional(s.string()),
  code: s.optional(s.string()),
  displayName: s.optional(s.string()),
  symbol: s.optional(s.string()),
  amountDecimalPlaces: s.optional(s.string()),
  amountRoundingPrecision: s.optional(s.float64()),
  lastModifiedDateTime: s.optional(s.dateTime()),
};

export const currencyInternalSchema: Schema<Currency> = s.object<Currency>(currencyProperties, {
  additionalProperties: s.json(),
});

export const currencySchema: Schema<Currency> = s.lazySchema(() =>
  s.object<Currency>(
    {
      ...currencyProperties,
      code: s.optional(s.string().check(s.maxLength(10))),
      displayName: s.optional(s.string().check(s.maxLength(100))),
      symbol: s.optional(s.string().check(s.maxLength(10))),
    },
    { additionalProperties: s.json() },
  ),
);
