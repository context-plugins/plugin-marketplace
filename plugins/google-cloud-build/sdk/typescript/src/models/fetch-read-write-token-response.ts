import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Message for responding to get read/write token. */
export type FetchReadWriteTokenResponse = {
  /** The token content. */
  token?: string;
  /** Expiration timestamp. Can be empty if unknown or non-expiring. */
  expirationTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fetchReadWriteTokenResponseSchema: Schema<FetchReadWriteTokenResponse> =
  s.object<FetchReadWriteTokenResponse>(
    {
      token: s.optional(s.string()),
      expirationTime: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
