import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { databaseUpdatesSchema, type DatabaseUpdates } from "./database-updates.js";
import { dateRangeStatusSchema, type DateRangeStatus } from "./date-range-status.js";
import { newlyStatusSchema, type NewlyStatus } from "./newly-status.js";
import { threatFeedStatusSchema, type ThreatFeedStatus } from "./threat-feed-status.js";

export type DatabaseFileStatus = {
  newly?: NewlyStatus;
  expired?: DateRangeStatus;
  cleanedExpired?: DateRangeStatus;
  dropped?: DateRangeStatus;
  droppedWithBacklinks?: DateRangeStatus;
  threatFeed?: ThreatFeedStatus;
  databaseUpdates?: DatabaseUpdates;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const databaseFileStatusSchema: Schema<DatabaseFileStatus> = s.object<DatabaseFileStatus>(
  {
    newly: s.optional(s.lazy(() => newlyStatusSchema)),
    expired: s.optional(s.lazy(() => dateRangeStatusSchema)),
    cleanedExpired: s.optional(s.lazy(() => dateRangeStatusSchema)),
    dropped: s.optional(s.lazy(() => dateRangeStatusSchema)),
    droppedWithBacklinks: s.optional(s.lazy(() => dateRangeStatusSchema)),
    threatFeed: s.optional(s.lazy(() => threatFeedStatusSchema)),
    databaseUpdates: s.optional(s.lazy(() => databaseUpdatesSchema)),
    _keysMap: {
      cleanedExpired: "cleaned_expired",
      droppedWithBacklinks: "dropped_with_backlinks",
      threatFeed: "threat_feed",
      databaseUpdates: "database_updates",
    },
  },
  { additionalProperties: s.json() },
);
