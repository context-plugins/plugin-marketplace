import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bankAccountOwnerTypeSchema, type BankAccountOwnerType } from "./bank-account-owner-type.js";
import { bankAccountTypeSchema, type BankAccountType } from "./bank-account-type.js";

/** Create a customer bank account */
export type CreateCustomerBankAccountRequestDto = {
  /** Customer bank account name */
  nameOnAccount: string;
  /** Customer bank account nickname */
  nickname?: string;
  /** Customer bank routing number */
  routingNumber: string;
  /** Customer bank account number */
  accountNumber: string;
  type: BankAccountType;
  ownerType: BankAccountOwnerType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createCustomerBankAccountRequestDtoProperties: s.Shape<CreateCustomerBankAccountRequestDto> = {
  nameOnAccount: s.string(),
  nickname: s.optional(s.string()),
  routingNumber: s.string(),
  accountNumber: s.string(),
  type: bankAccountTypeSchema,
  ownerType: bankAccountOwnerTypeSchema,
};

export const createCustomerBankAccountRequestDtoInternalSchema: Schema<CreateCustomerBankAccountRequestDto> =
  s.object<CreateCustomerBankAccountRequestDto>(createCustomerBankAccountRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const createCustomerBankAccountRequestDtoSchema: Schema<CreateCustomerBankAccountRequestDto> =
  s.lazySchema(() =>
    s.object<CreateCustomerBankAccountRequestDto>(
      {
        ...createCustomerBankAccountRequestDtoProperties,
        nameOnAccount: s.string().check(s.minLength(1)),
        routingNumber: s.string().check(s.minLength(1)),
        accountNumber: s.string().check(s.minLength(1)),
      },
      { additionalProperties: s.json() },
    ),
  );
