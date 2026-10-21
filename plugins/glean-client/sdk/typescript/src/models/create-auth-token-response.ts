import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateAuthTokenResponse = {
  /** An authentication token that can be passed to any endpoint via Bearer Authentication */
  token: string;
  /** Unix timestamp for when this token expires (in seconds since epoch UTC). */
  expirationTime: number;
};

export const createAuthTokenResponseSchema: Schema<CreateAuthTokenResponse> =
  s.object<CreateAuthTokenResponse>({
    token: s.string(),
    expirationTime: s.int(),
  });
