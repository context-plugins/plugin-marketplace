import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mfaStatus2Schema, type MfaStatus2 } from "./mfa-status2.js";

/** Login session info. */
export type SessionInfoResponseDto = {
  /** BILL-generated ID of the current organization */
  organizationId?: string;
  /** BILL-generated ID of the current user */
  userId?: string;
  mfaStatus?: MfaStatus2;
  /**
   * This field is set as `true` when MFA is disabled at the developer key level. All organizations
   * that are linked to this developer key do not require MFA.
   */
  mfaBypass?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sessionInfoResponseDtoSchema: Schema<SessionInfoResponseDto> = s.object<SessionInfoResponseDto>(
  {
    organizationId: s.optional(s.string()),
    userId: s.optional(s.string()),
    mfaStatus: s.optional(s.lazy(() => mfaStatus2Schema)),
    mfaBypass: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
