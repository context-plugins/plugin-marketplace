import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sourceInternalSchema, sourceSchema, type Source } from "./source.js";
import { termsConsentSchema, type TermsConsent } from "./terms-consent.js";

export type SignupRequestCreate = {
  /** Work email of the organization's admin. Free-mail and disposable addresses are rejected. */
  email: string;
  companyName: string;
  /** Attribution. channel defaults to agent; console and web are the human channels. */
  source?: Source;
  /** Cloudflare Turnstile response token. Required for the console and web channels. */
  turnstileToken?: string;
  /** Terms of Service acceptance. Required for the console and web channels. */
  termsConsent?: TermsConsent;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const signupRequestCreateProperties: s.Shape<SignupRequestCreate> = {
  email: s.string(),
  companyName: s.string(),
  source: s.optional(s.lazy(() => sourceInternalSchema)),
  turnstileToken: s.optional(s.string()),
  termsConsent: s.optional(s.lazy(() => termsConsentSchema)),
};

export const signupRequestCreateInternalSchema: Schema<SignupRequestCreate> = s.object<SignupRequestCreate>(
  signupRequestCreateProperties,
  { additionalProperties: s.json() },
);

export const signupRequestCreateSchema: Schema<SignupRequestCreate> = s.lazySchema(() =>
  s.object<SignupRequestCreate>(
    {
      ...signupRequestCreateProperties,
      email: s.string().check(s.maxLength(120), s.email()),
      companyName: s.string().check(s.minLength(1), s.maxLength(120)),
      source: s.optional(s.lazy(() => sourceSchema)),
      turnstileToken: s.optional(s.string().check(s.maxLength(2048))),
    },
    { additionalProperties: s.json() },
  ),
);
