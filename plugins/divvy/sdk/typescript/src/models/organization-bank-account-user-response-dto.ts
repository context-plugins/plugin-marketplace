import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  organizationBankAccountUserStatusSchema,
  type OrganizationBankAccountUserStatus,
} from "./organization-bank-account-user-status.js";

/** Bank account user response. */
export type OrganizationBankAccountUserResponseDto = {
  /** BILL-generated ID of the bank account user. The value begins with `bau`. */
  id?: string;
  /** BILL-generated ID of the bank account. The value begins with `bac`. */
  bankAccountId?: string;
  /** BILL-generated ID of the user. The value begins with `006`. */
  userId?: string;
  /** Set as `true` if the bank account user is archived */
  archived?: boolean;
  verificationStatus?: OrganizationBankAccountUserStatus;
  /** Created date and time */
  createdTime?: Date;
  /** Updated date and time */
  updatedTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const organizationBankAccountUserResponseDtoSchema: Schema<OrganizationBankAccountUserResponseDto> =
  s.object<OrganizationBankAccountUserResponseDto>(
    {
      id: s.optional(s.string()),
      bankAccountId: s.optional(s.string()),
      userId: s.optional(s.string()),
      archived: s.optional(s.boolean()),
      verificationStatus: s.optional(s.lazy(() => organizationBankAccountUserStatusSchema)),
      createdTime: s.optional(s.dateTime()),
      updatedTime: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
