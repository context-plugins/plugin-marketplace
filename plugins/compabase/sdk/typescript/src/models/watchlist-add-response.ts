import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WatchlistAddResponse = {
  /** Normalized 10-digit KRS. */
  krs: string;
  /** Internal company identifier. */
  entityId: string;
  /** True if the company was already on the watchlist before this request. */
  alreadyFollowing: boolean;
  /**
   * When the watchlist entry was created. Null when already_following is true and the original
   * timestamp is unavailable.
   */
  createdAt?: Date | null;
  /** Present and `true` only for `dry_run=true` requests — nothing was written. */
  dryRun?: boolean;
  /** Only with `dry_run=true` — whether a real request would add the company. */
  wouldAdd?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const watchlistAddResponseSchema: Schema<WatchlistAddResponse> = s.object<WatchlistAddResponse>(
  {
    krs: s.string(),
    entityId: s.string(),
    alreadyFollowing: s.boolean(),
    createdAt: s.optionalNullable(s.dateTime()),
    dryRun: s.optional(s.boolean()),
    wouldAdd: s.optional(s.boolean()),
    _keysMap: {
      entityId: "entity_id",
      alreadyFollowing: "already_following",
      createdAt: "created_at",
      dryRun: "dry_run",
      wouldAdd: "would_add",
    },
  },
  { additionalProperties: s.json() },
);
