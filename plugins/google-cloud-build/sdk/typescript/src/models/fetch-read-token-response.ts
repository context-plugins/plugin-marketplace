import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Message for responding to get read token. */
export type FetchReadTokenResponse = {
  /** Expiration timestamp. Can be empty if unknown or non-expiring. */
  expirationTime?: string;
  /** The token content. */
  token?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fetchReadTokenResponseSchema: Schema<FetchReadTokenResponse> = s.object<FetchReadTokenResponse>(
  {
    expirationTime: s.optional(s.string()),
    token: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
