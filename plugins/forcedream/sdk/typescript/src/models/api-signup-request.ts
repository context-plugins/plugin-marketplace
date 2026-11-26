import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiSignupRequest = {
  email: string;
  /**
   * Explicit opt-in only. Defaults to false -- an email address existing because someone signed up
   * is never treated as consent to be contacted.
   *
   * @default false
   */
  marketingConsent?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiSignupRequestProperties: s.Shape<ApiSignupRequest> = {
  email: s.string(),
  marketingConsent: s.defaulted(s.boolean(), false),
  _keysMap: {
    marketingConsent: "marketing_consent",
  },
};

export const apiSignupRequestInternalSchema: Schema<ApiSignupRequest> = s.object<ApiSignupRequest>(
  apiSignupRequestProperties,
  { additionalProperties: s.json() },
);

export const apiSignupRequestSchema: Schema<ApiSignupRequest> = s.lazySchema(() =>
  s.object<ApiSignupRequest>(
    {
      ...apiSignupRequestProperties,
      email: s.string().check(s.email()),
    },
    { additionalProperties: s.json() },
  ),
);
