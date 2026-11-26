import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  organizationCardAccountUserStatusSchema,
  type OrganizationCardAccountUserStatus,
} from "./organization-card-account-user-status.js";

/** Card account user response. */
export type OrganizationCardAccountUserResponseDto = {
  /** BILL-generated ID of the card account. The value begins with `cat`. */
  cardAccountId?: string;
  /** BILL-generated ID of the user. The value begins with `006`. */
  userId?: string;
  /** Set as `true` if the card account is archived */
  archived?: boolean;
  verificationStatus?: OrganizationCardAccountUserStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const organizationCardAccountUserResponseDtoSchema: Schema<OrganizationCardAccountUserResponseDto> =
  s.object<OrganizationCardAccountUserResponseDto>(
    {
      cardAccountId: s.optional(s.string()),
      userId: s.optional(s.string()),
      archived: s.optional(s.boolean()),
      verificationStatus: s.optional(s.lazy(() => organizationCardAccountUserStatusSchema)),
    },
    { additionalProperties: s.json() },
  );
