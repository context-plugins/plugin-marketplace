import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type HttpRedirect = {
  /**
   * The URL including the domain to be validated. The certificate authority sends GET requests here
   * during validation.
   */
  redirectFrom?: string;
  /**
   * The URL hosting the validation token. RedirectFrom must return this content or redirect here.
   */
  redirectTo?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const httpRedirectSchema: Schema<HttpRedirect> = s.object<HttpRedirect>(
  {
    redirectFrom: s.optional(s.string()),
    redirectTo: s.optional(s.string()),
    _keysMap: {
      redirectFrom: "RedirectFrom",
      redirectTo: "RedirectTo",
    },
  },
  { additionalProperties: s.json() },
);
