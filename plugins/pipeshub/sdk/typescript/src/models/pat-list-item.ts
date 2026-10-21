import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A personal access token as seen by its own creator (one element of `GET
 * /personal-access-tokens`'s `tokens` array, or the `token` object returned by `POST
 * /personal-access-tokens` before `accessToken` is added).
 */
export type PatListItem = {
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
};

export const patListItemSchema: Schema<PatListItem> = s.object<PatListItem>({
  id: s.string(),
  name: s.string(),
  scopes: s.array(s.string()),
  createdAt: s.dateTime(),
  expiresAt: s.dateTime(),
  lastUsedAt: s.optional(s.dateTime()),
});
