import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Verify a bank account */
export type BankAccountVerifyRequestDto = {
  /**
   * Verify deposit amount.
   *
   * Enter an amount between `0.01` and `0.99`. In the sandbox environment, set this field as `0.50`
   * to complete bank account verification.
   */
  depositAmount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const bankAccountVerifyRequestDtoProperties: s.Shape<BankAccountVerifyRequestDto> = {
  depositAmount: s.float64(),
};

export const bankAccountVerifyRequestDtoInternalSchema: Schema<BankAccountVerifyRequestDto> =
  s.object<BankAccountVerifyRequestDto>(bankAccountVerifyRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const bankAccountVerifyRequestDtoSchema: Schema<BankAccountVerifyRequestDto> = s.lazySchema(() =>
  s.object<BankAccountVerifyRequestDto>(
    {
      ...bankAccountVerifyRequestDtoProperties,
      depositAmount: s.float64().check(s.gte(0.01), s.lte(0.99)),
    },
    { additionalProperties: s.json() },
  ),
);
