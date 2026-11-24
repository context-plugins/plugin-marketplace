import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Verify a bank account response. */
export type BankAccountVerifyResponseDto = {
  /** Set as `true` if the bank account is verified */
  verified?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bankAccountVerifyResponseDtoSchema: Schema<BankAccountVerifyResponseDto> =
  s.object<BankAccountVerifyResponseDto>(
    {
      verified: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
