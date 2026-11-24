import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * A single email validation result object. Fields may be `true`/`false` or `null` depending on
 * whether a check was performed or supported by your plan.
 */
export type EmailValidationResponse = {
  /** Exact email address as checked. */
  email: string;
  /** Suggested correction if a domain-typo is detected; empty string if none. */
  didYouMean?: string | null;
  /** Local part (before the \@) of the email address. */
  user?: string | null;
  /** Domain part (after the \@) of the email address. */
  domain?: string | null;
  /** Returns true if the email address syntax is valid per RFC rules. */
  formatValid?: boolean | null;
  /** True if MX records for the domain were found. */
  mxFound?: boolean | null;
  /** Result of SMTP verification (true = mailbox appears to exist). */
  smtpCheck?: boolean | null;
  /**
   * True if the domain accepts all emails (catch-all). If catch-all detection was not requested or
   * not permitted on plan, this value may be null.
   */
  catchAll?: boolean | null;
  /** True if the email address is a role account (e.g., admin, support). */
  role?: boolean | null;
  /** True if the address belongs to a known disposable / temporary provider. */
  disposable?: boolean | null;
  /** True if the email uses a known free provider (e.g., gmail.com). */
  free?: boolean | null;
  /** Aggregate quality/deliverability score between 0 (worst) and 1 (best). */
  score?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const emailValidationResponseProperties: s.Shape<EmailValidationResponse> = {
  email: s.string(),
  didYouMean: s.optionalNullable(s.string()),
  user: s.optionalNullable(s.string()),
  domain: s.optionalNullable(s.string()),
  formatValid: s.optionalNullable(s.boolean()),
  mxFound: s.optionalNullable(s.boolean()),
  smtpCheck: s.optionalNullable(s.boolean()),
  catchAll: s.optionalNullable(s.boolean()),
  role: s.optionalNullable(s.boolean()),
  disposable: s.optionalNullable(s.boolean()),
  free: s.optionalNullable(s.boolean()),
  score: s.optionalNullable(s.float64()),
  _keysMap: {
    didYouMean: "did_you_mean",
    formatValid: "format_valid",
    mxFound: "mx_found",
    smtpCheck: "smtp_check",
    catchAll: "catch_all",
  },
};

export const emailValidationResponseInternalSchema: Schema<EmailValidationResponse> =
  s.object<EmailValidationResponse>(emailValidationResponseProperties, { additionalProperties: s.json() });

export const emailValidationResponseSchema: Schema<EmailValidationResponse> = s.lazySchema(() =>
  s.object<EmailValidationResponse>(
    {
      ...emailValidationResponseProperties,
      email: s.string().check(s.email()),
    },
    { additionalProperties: s.json() },
  ),
);
