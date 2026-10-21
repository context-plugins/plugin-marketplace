import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserAgentToken = {
  /** The unique User-Agent token. */
  token?: string;
  /** The date from which the token is active, in ISO 8601 format. */
  startsAt?: string;
  /**
   * The date until when the token will be active, in ISO 8601 format. Will be `null` if the token
   * does not have an end date (yet).
   */
  endsAt?: string | null;
};

export const userAgentTokenSchema: Schema<UserAgentToken> = s.object<UserAgentToken>({
  token: s.optional(s.string()),
  startsAt: s.optional(s.string()),
  endsAt: s.optionalNullable(s.string()),
});
