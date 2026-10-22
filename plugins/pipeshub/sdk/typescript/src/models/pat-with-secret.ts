import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PatWithSecret = {
  /** Token ID */
  id: string;
  /** Token name */
  name: string;
  /** Granted scopes */
  scopes: string[];
  createdAt: Date;
  /**
   * Expiry timestamp. A `"never"`-expiry token is stored as a ~100-year-out date, not a literal
   * null — treat anything decades out as "never" rather than a real deadline.
   */
  expiresAt: Date;
  /**
   * Last time this token successfully authenticated a request. Throttled server-side to update at
   * most once per 5 minutes per token; absent if the token has never been used.
   */
  lastUsedAt?: Date;
  /**
   * The raw token, `phpat_`-prefixed. Returned **only** in this creation response — only its hash
   * is stored server-side, so it cannot be retrieved again later.
   */
  accessToken: string;
};

export const patWithSecretSchema: Schema<PatWithSecret> = s.object<PatWithSecret>({
  id: s.string(),
  name: s.string(),
  scopes: s.array(s.string()),
  createdAt: s.dateTime(),
  expiresAt: s.dateTime(),
  lastUsedAt: s.optional(s.dateTime()),
  accessToken: s.string(),
});
