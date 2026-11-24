import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bankAccountOwnerTypeSchema, type BankAccountOwnerType } from "./bank-account-owner-type.js";

/** Update a customer bank account */
export type UpdateCustomerBankAccountRequestDto = {
  /** Customer bank account nickname */
  nickname?: string;
  ownerType?: BankAccountOwnerType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateCustomerBankAccountRequestDtoSchema: Schema<UpdateCustomerBankAccountRequestDto> =
  s.object<UpdateCustomerBankAccountRequestDto>(
    {
      nickname: s.optional(s.string()),
      ownerType: s.optional(s.lazy(() => bankAccountOwnerTypeSchema)),
    },
    { additionalProperties: s.json() },
  );
