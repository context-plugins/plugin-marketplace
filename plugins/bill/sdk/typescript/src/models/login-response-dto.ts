import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Login response. */
export type LoginResponseDto = {
  /**
   * API session ID. Use this value in all subsequent API calls to confirm that you are in a
   * signed-in session.
   */
  sessionId: string;
  /** Organization ID associated with the signed-in user */
  organizationId: string;
  /** BILL-generated ID of the signed-in user */
  userId: string;
  /** This field is set as `true` if the current API session is MFA-trusted */
  trusted: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const loginResponseDtoSchema: Schema<LoginResponseDto> = s.object<LoginResponseDto>(
  {
    sessionId: s.string(),
    organizationId: s.string(),
    userId: s.string(),
    trusted: s.boolean(),
  },
  { additionalProperties: s.json() },
);
