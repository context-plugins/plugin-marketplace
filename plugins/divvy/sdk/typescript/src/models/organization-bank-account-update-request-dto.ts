import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bankAccountOwnerTypeSchema, type BankAccountOwnerType } from "./bank-account-owner-type.js";
import { defaultSchema, type Default } from "./default.js";

/** Update a bank account */
export type OrganizationBankAccountUpdateRequestDto = {
  /** Full name on bank account */
  nameOnAccount?: string;
  ownerType?: BankAccountOwnerType;
  /** Bank name. Set this field as a nickname for your bank account. */
  bankName?: string;
  /** Set as `true` to enable access to all users with the `ADMINISTRATOR` user role */
  accessToAdmins?: boolean;
  default?: Default;
  /**
   * BILL-generated ID of the chart of accounts for the organization bank account. The value begins
   * with `0ca`.
   */
  chartOfAccountId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const organizationBankAccountUpdateRequestDtoProperties: s.Shape<OrganizationBankAccountUpdateRequestDto> = {
  nameOnAccount: s.optional(s.string()),
  ownerType: s.optional(s.lazy(() => bankAccountOwnerTypeSchema)),
  bankName: s.optional(s.string()),
  accessToAdmins: s.optional(s.boolean()),
  default: s.optional(s.lazy(() => defaultSchema)),
  chartOfAccountId: s.optional(s.string()),
};

export const organizationBankAccountUpdateRequestDtoInternalSchema: Schema<OrganizationBankAccountUpdateRequestDto> =
  s.object<OrganizationBankAccountUpdateRequestDto>(organizationBankAccountUpdateRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const organizationBankAccountUpdateRequestDtoSchema: Schema<OrganizationBankAccountUpdateRequestDto> =
  s.lazySchema(() =>
    s.object<OrganizationBankAccountUpdateRequestDto>(
      {
        ...organizationBankAccountUpdateRequestDtoProperties,
        bankName: s.optional(s.string().check(s.maxLength(100))),
      },
      { additionalProperties: s.json() },
    ),
  );
