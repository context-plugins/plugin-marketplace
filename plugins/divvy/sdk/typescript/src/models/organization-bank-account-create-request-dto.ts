import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bankAccountOwnerTypeSchema, type BankAccountOwnerType } from "./bank-account-owner-type.js";
import { bankAccountTypeSchema, type BankAccountType } from "./bank-account-type.js";

/** Create a bank account */
export type OrganizationBankAccountCreateRequestDto = {
  /** Full name on bank account */
  nameOnAccount: string;
  /** Bank routing number. This field is required. */
  routingNumber?: string;
  /** Bank account number. This field is required. */
  accountNumber?: string;
  type: BankAccountType;
  ownerType: BankAccountOwnerType;
  /** Bank name. Set this field as a nickname for your bank account. */
  bankName: string;
  /** Set as `true` to enable access to all users with the `ADMINISTRATOR` user role */
  accessToAdmins?: boolean;
  /**
   * BILL-generated ID of the chart of accounts for the bank account. The value begins with `0ca`.
   */
  chartOfAccountId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const organizationBankAccountCreateRequestDtoProperties: s.Shape<OrganizationBankAccountCreateRequestDto> = {
  nameOnAccount: s.string(),
  routingNumber: s.optional(s.string()),
  accountNumber: s.optional(s.string()),
  type: bankAccountTypeSchema,
  ownerType: bankAccountOwnerTypeSchema,
  bankName: s.string(),
  accessToAdmins: s.optional(s.boolean()),
  chartOfAccountId: s.optional(s.string()),
};

export const organizationBankAccountCreateRequestDtoInternalSchema: Schema<OrganizationBankAccountCreateRequestDto> =
  s.object<OrganizationBankAccountCreateRequestDto>(organizationBankAccountCreateRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const organizationBankAccountCreateRequestDtoSchema: Schema<OrganizationBankAccountCreateRequestDto> =
  s.lazySchema(() =>
    s.object<OrganizationBankAccountCreateRequestDto>(
      {
        ...organizationBankAccountCreateRequestDtoProperties,
        nameOnAccount: s.string().check(s.minLength(1)),
        bankName: s.string().check(s.minLength(1), s.maxLength(100)),
      },
      { additionalProperties: s.json() },
    ),
  );
