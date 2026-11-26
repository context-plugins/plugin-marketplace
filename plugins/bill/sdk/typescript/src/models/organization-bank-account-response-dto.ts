import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bankAccountOwnerTypeSchema, type BankAccountOwnerType } from "./bank-account-owner-type.js";
import { bankAccountStatusSchema, type BankAccountStatus } from "./bank-account-status.js";
import { bankAccountTypeSchema, type BankAccountType } from "./bank-account-type.js";
import { defaultSchema, type Default } from "./default.js";

/** Bank account response. */
export type OrganizationBankAccountResponseDto = {
  /** BILL-generated ID of the bank account. The value begins with `bac`. */
  id: string;
  /** Set as `true` if the bank account is archived */
  archived: boolean;
  status?: BankAccountStatus;
  /** BILL-generated ID of the user that created the bank account. The value begins with `006`. */
  createdBy?: string;
  /** Bank routing number */
  routingNumber?: string;
  /** Bank account number */
  accountNumber?: string;
  /** Full name on bank account */
  nameOnAccount?: string;
  type?: BankAccountType;
  ownerType?: BankAccountOwnerType;
  /** Bank name */
  bankName?: string;
  /** Set as `true` to enable access to all users with the `ADMINISTRATOR` user role */
  accessToAdmins?: boolean;
  default?: Default;
  /** Created date and time */
  createdTime?: Date;
  /** Updated date and time */
  updatedTime?: Date;
  /**
   * BILL-generated ID of the chart of accounts for the bank account. The value begins with `0ca`.
   */
  chartOfAccountId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const organizationBankAccountResponseDtoSchema: Schema<OrganizationBankAccountResponseDto> =
  s.object<OrganizationBankAccountResponseDto>(
    {
      id: s.string(),
      archived: s.boolean(),
      status: s.optional(s.lazy(() => bankAccountStatusSchema)),
      createdBy: s.optional(s.string()),
      routingNumber: s.optional(s.string()),
      accountNumber: s.optional(s.string()),
      nameOnAccount: s.optional(s.string()),
      type: s.optional(s.lazy(() => bankAccountTypeSchema)),
      ownerType: s.optional(s.lazy(() => bankAccountOwnerTypeSchema)),
      bankName: s.optional(s.string()),
      accessToAdmins: s.optional(s.boolean()),
      default: s.optional(s.lazy(() => defaultSchema)),
      createdTime: s.optional(s.dateTime()),
      updatedTime: s.optional(s.dateTime()),
      chartOfAccountId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
