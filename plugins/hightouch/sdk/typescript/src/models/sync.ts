import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { externalSegmentSchema, type ExternalSegment } from "./external-segment.js";
import { scheduleSchema, type Schedule } from "./schedule.js";
import { syncStatus2Schema, type SyncStatus2 } from "./sync-status2.js";
import { userReferenceSchema, type UserReference } from "./user-reference.js";

/**
 * Syncs define how data from models are mapped to destinations. Each time a sync runs, Hightouch
 * calculates the rows that have changed since the last run, and syncs them to Sync's destination.
 */
export type Sync = {
  /** The sync's id */
  id: number;
  /** The sync's slug */
  slug: string;
  /** The id of the workspace that the sync belongs to */
  workspaceId: number;
  /** The timestamp when the sync was created */
  createdAt: Date;
  /** The timestamp when the sync was last updated */
  updatedAt: Date;
  /** The user who created the sync, or null if no user was recorded */
  createdBy: UserReference;
  /** The user who last updated the sync, or null if no user was recorded */
  updatedBy: UserReference;
  /** The id of the Destination that sync is connected to */
  destinationId: number;
  /** The id of the Model that sync is connected to */
  modelId: number;
  /**
   * The sync's configuration. This specifies how data is mapped, among other configuration.
   *
   * The schema depends on the destination type.
   *
   * For a sync bound to a sync template this is the effective configuration: the template's
   * configuration with this sync's `syncTemplateOverrides` applied.
   *
   * Consumers should NOT make assumptions on the contents of the configuration. It may change as
   * Hightouch updates its internal code.
   */
  configuration: Record<string, unknown>;
  /**
   * The scheduling configuration. It can be triggered based on several ways:
   *
   * Interval: the sync will be triggered based on certain interval(minutes/hours/days/weeks)
   *
   * Cron: the sync will be triggered based on cron expression https://en.wikipedia.org/wiki/Cron.
   *
   * Visual: the sync will be triggered based a visual cron configuration on UI
   *
   * DBT-cloud: the sync will be triggered based on a dbt cloud job
   *
   * Match Booster (type "match_booster"): the sync will be triggered after each Match Booster
   * enrichment run of its model completes. Requires the model to have Match Booster enabled, and
   * takes no inner schedule payload.
   */
  schedule: Schedule | null;
  /** The overall status of the sync */
  status: SyncStatus2;
  /** Whether the sync has been disabled by the user. */
  disabled: boolean;
  /** The timestamp of the last sync run */
  lastRunAt: Date | null;
  /** The reference column that sync depends on to sync data from source */
  referencedColumns: string[];
  /** The primary key that sync uses to identify data from source */
  primaryKey: string;
  /** The user facing ID for any created lists or audiences in the sync destination */
  externalSegment: ExternalSegment;
  /** The tags of the sync */
  tags: Record<string, string>;
  /**
   * The id of the sync template this sync is bound to, or null when the sync owns its
   * configuration. A bound sync takes its destination and configuration from the template and
   * follows later changes to the template; `configuration` is the effective merged configuration
   * and `syncTemplateOverrides` holds this sync's own values.
   */
  syncTemplateId: number | null;
  /**
   * The template configuration fields this sync overrides, keyed by configuration field path (for
   * example "externalIdMapping" or "target.schema"). Null when the sync is not bound to a sync
   * template or has no overrides.
   */
  syncTemplateOverrides: Record<string, unknown> | null;
};

export const syncSchema: Schema<Sync> = s.object<Sync>({
  id: s.float64(),
  slug: s.string(),
  workspaceId: s.float64(),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  createdBy: userReferenceSchema,
  updatedBy: userReferenceSchema,
  destinationId: s.float64(),
  modelId: s.float64(),
  configuration: s.record(s.string(), s.unknown()),
  schedule: s.nullable(s.lazy(() => scheduleSchema)),
  status: syncStatus2Schema,
  disabled: s.boolean(),
  lastRunAt: s.nullable(s.dateTime()),
  referencedColumns: s.array(s.string()),
  primaryKey: s.string(),
  externalSegment: externalSegmentSchema,
  tags: s.record(s.string(), s.string()),
  syncTemplateId: s.nullable(s.float64()),
  syncTemplateOverrides: s.nullable(s.record(s.string(), s.unknown())),
});
