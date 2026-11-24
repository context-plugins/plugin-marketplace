import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response with OAuth redirect URL. */
export type AuthorizeResponse = {
  redirectUrl: string;
  provider: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const authorizeResponseSchema: Schema<AuthorizeResponse> = s.object<AuthorizeResponse>(
  {
    redirectUrl: s.string(),
    provider: s.string(),
    _keysMap: {
      redirectUrl: "redirect_url",
    },
  },
  { additionalProperties: s.json() },
);
