import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** API login as user response. */
export type LoginAsUserResponseDto = {
  /**
   * API session ID. Use this value in all subsequent API calls to confirm that you are in a
   * signed-in session.
   */
  sessionId?: string;
  /** This field is set as `true` if the current API session is MFA-trusted */
  trusted?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const loginAsUserResponseDtoSchema: Schema<LoginAsUserResponseDto> = s.object<LoginAsUserResponseDto>(
  {
    sessionId: s.optional(s.string()),
    trusted: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
