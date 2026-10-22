import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A personal access token as seen by an org admin — extends `PatListItem` with who it belongs to,
 * since an admin is looking across every member's tokens rather than just their own.
 */
export type AdminPatListItem = {
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
  /** ID of the user who created this token */
  userId: string;
  /** Owner's email. Populated even when `ownerDeleted` is true (last-known value), for auditing. */
  ownerEmail?: string;
  /** Owner's full name (same last-known-value behavior as `ownerEmail`) */
  ownerFullName?: string;
  /**
   * True if the owning user has been removed from the org (or no longer resolves at all). The token
   * still appears — a deleted user's tokens stop authenticating automatically, but stay visible
   * here so an admin can audit/clean them up.
   */
  ownerDeleted: boolean;
};

export const adminPatListItemSchema: Schema<AdminPatListItem> = s.object<AdminPatListItem>({
  id: s.string(),
  name: s.string(),
  scopes: s.array(s.string()),
  createdAt: s.dateTime(),
  expiresAt: s.dateTime(),
  lastUsedAt: s.optional(s.dateTime()),
  userId: s.string(),
  ownerEmail: s.optional(s.string()),
  ownerFullName: s.optional(s.string()),
  ownerDeleted: s.boolean(),
});
