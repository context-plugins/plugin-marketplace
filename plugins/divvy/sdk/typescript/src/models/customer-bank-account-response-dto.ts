import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bankAccountOwnerTypeSchema, type BankAccountOwnerType } from "./bank-account-owner-type.js";
import { bankAccountStatusSchema, type BankAccountStatus } from "./bank-account-status.js";
import { bankAccountTypeSchema, type BankAccountType } from "./bank-account-type.js";

/** CustomerBankAccount response Dto. */
export type CustomerBankAccountResponseDto = {
  /** BILL-generated ID of the customer bank account. The value begins with `cba`. */
  id?: string;
  /** Customer bank account name */
  nameOnAccount?: string;
  /** Customer bank account nickname */
  nickname?: string;
  /** Customer bank routing number */
  routingNumber?: string;
  /** Customer bank account number */
  accountNumber?: string;
  type?: BankAccountType;
  ownerType?: BankAccountOwnerType;
  status?: BankAccountStatus;
  /** Set as `true` if the customer bank account is archived */
  archived?: boolean;
  /** Created date and time */
  createdTime?: Date;
  /** Updated date and time */
  updatedTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerBankAccountResponseDtoSchema: Schema<CustomerBankAccountResponseDto> =
  s.object<CustomerBankAccountResponseDto>(
    {
      id: s.optional(s.string()),
      nameOnAccount: s.optional(s.string()),
      nickname: s.optional(s.string()),
      routingNumber: s.optional(s.string()),
      accountNumber: s.optional(s.string()),
      type: s.optional(s.lazy(() => bankAccountTypeSchema)),
      ownerType: s.optional(s.lazy(() => bankAccountOwnerTypeSchema)),
      status: s.optional(s.lazy(() => bankAccountStatusSchema)),
      archived: s.optional(s.boolean()),
      createdTime: s.optional(s.dateTime()),
      updatedTime: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
