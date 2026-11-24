import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProfileEmailApi = {
  /**
   * The email address.
   * - Example: `info@rocketreach.co`
   */
  email?: string;
  /**
   * SMTP validation result. Options are `valid`, `invalid`, `accept-all`, or `unknown`.
   * - Example: `valid`
   */
  smtpValid?: string | null;
  /**
   * The type of email address. Options are `personal`, `professional`, `disposable`, or
   * `role-based`.
   * - Example: `professional`
   */
  type?: string | null;
  /**
   * Timestamp of the last validation check of the email address.
   * - Example: `2026-01-01T12:00:00Z`
   */
  lastValidationCheck?: string | null;
  /**
   * RocketReach internal grade for the email. See <a
   * href="https://knowledgebase.rocketreach.co/hc/en-us/articles/360047771994">Email Grades</a> for
   * details.
   */
  grade?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const profileEmailApiSchema: Schema<ProfileEmailApi> = s.object<ProfileEmailApi>(
  {
    email: s.optional(s.string()),
    smtpValid: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    lastValidationCheck: s.optionalNullable(s.string()),
    grade: s.optional(s.string()),
    _keysMap: {
      smtpValid: "smtp_valid",
      lastValidationCheck: "last_validation_check",
    },
  },
  { additionalProperties: s.json() },
);
