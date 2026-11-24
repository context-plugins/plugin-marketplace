import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Money = {
  /** Decimal monetary amount at ISO 4217 minor-unit precision (string). */
  amount: string;
  /** ISO 4217 currency code. */
  currency: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const moneyProperties: s.Shape<Money> = {
  amount: s.string(),
  currency: s.string(),
};

export const moneyInternalSchema: Schema<Money> = s.object<Money>(moneyProperties, {
  additionalProperties: s.json(),
});

export const moneySchema: Schema<Money> = s.lazySchema(() =>
  s.object<Money>(
    {
      ...moneyProperties,
      amount: s.string().check(s.pattern("^-?(0|[1-9]\\d*)(\\.\\d+)?$")),
      currency: s.string().check(s.pattern("^[A-Z]{3}$")),
    },
    { additionalProperties: s.json() },
  ),
);
