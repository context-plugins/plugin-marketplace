import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scopeSchema, type Scope } from "./scope.js";

export type BootstrapVerifyOtpRequest = {
  email: string;
  /** The code from the email. Single-use; three wrong guesses destroy it. */
  code: string;
  /**
   * Must be true. Recorded server-side with the version, channel `api`, IP and User-Agent as the
   * account's acceptance evidence.
   */
  acceptTerms: boolean;
  /** The version being accepted. Defaults to the server's current version. */
  termsVersion?: string;
  /** @default "agent bootstrap" */
  keyName?: string;
  /**
   * Must be within `API_BOOTSTRAP_SCOPES` (default `read,sites:write`). Omitted = that whole set.
   * `billing:write` is never available here.
   */
  scopes?: Scope[];
  /** @default 90 */
  expiresInDays?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const bootstrapVerifyOtpRequestProperties: s.Shape<BootstrapVerifyOtpRequest> = {
  email: s.string(),
  code: s.string(),
  acceptTerms: s.boolean(),
  termsVersion: s.optional(s.string()),
  keyName: s.defaulted(s.string(), "agent bootstrap"),
  scopes: s.optional(s.array(s.lazy(() => scopeSchema))),
  expiresInDays: s.defaulted(s.int(), 90),
  _keysMap: {
    acceptTerms: "accept_terms",
    termsVersion: "terms_version",
    keyName: "key_name",
    expiresInDays: "expires_in_days",
  },
};

export const bootstrapVerifyOtpRequestInternalSchema: Schema<BootstrapVerifyOtpRequest> =
  s.object<BootstrapVerifyOtpRequest>(bootstrapVerifyOtpRequestProperties, {
    additionalProperties: s.json(),
  });

export const bootstrapVerifyOtpRequestSchema: Schema<BootstrapVerifyOtpRequest> = s.lazySchema(() =>
  s.object<BootstrapVerifyOtpRequest>(
    {
      ...bootstrapVerifyOtpRequestProperties,
      email: s.string().check(s.email()),
      keyName: s.defaulted(s.string().check(s.maxLength(100)), "agent bootstrap"),
      expiresInDays: s.defaulted(s.int().check(s.gte(1), s.lte(365)), 90),
    },
    { additionalProperties: s.json() },
  ),
);
