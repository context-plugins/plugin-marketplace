import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scheduleSchema, type Schedule } from "./schedule.js";

/**
 * The input for creating a Sync.
 *
 * A sync either owns its configuration (`destinationId` and `configuration` are required) or is
 * created from a sync template (`syncTemplateId` is required, `configuration` must be omitted and
 * this sync's own values go in `syncTemplateOverrides`).
 */
export type SyncCreate = {
  /** The sync's slug */
  slug: string;
  /** The id of the Model that sync is connected to */
  modelId: number;
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
  /** Whether the sync has been disabled by the user. */
  disabled: boolean;
  /**
   * The id of the Destination that sync is connected to. Required unless `syncTemplateId` is
   * provided: a sync created from a sync template always uses the template's destination, and this
   * field, when provided, must match it.
   */
  destinationId?: number;
  /**
   * The sync's configuration. This specifies how data is mapped, among other configuration. The
   * schema depends on the destination type.
   *
   * Required unless `syncTemplateId` is provided, in which case it must be omitted: the template
   * provides the configuration and this sync's own values go in `syncTemplateOverrides`.
   */
  configuration?: Record<string, unknown>;
  /**
   * The id of the Sync Template to create the sync from. The sync inherits the template's
   * destination and configuration and follows later changes to the template. A null `schedule`
   * inherits the template's schedule; a schedule given here belongs to the sync. `modelId` must be
   * the template's model or an audience built on it.
   */
  syncTemplateId?: number;
  /**
   * Values this sync sets for the template's overridable fields, keyed by configuration field path
   * (for example "externalIdMapping" or "target.schema"). Only fields the template's
   * `overrideConfig` marks as overridable are accepted. Requires `syncTemplateId`.
   */
  syncTemplateOverrides?: Record<string, unknown>;
};

export const syncCreateSchema: Schema<SyncCreate> = s.object<SyncCreate>({
  slug: s.string(),
  modelId: s.float64(),
  schedule: s.nullable(s.lazy(() => scheduleSchema)),
  disabled: s.boolean(),
  destinationId: s.optional(s.float64()),
  configuration: s.optional(s.record(s.string(), s.unknown())),
  syncTemplateId: s.optional(s.float64()),
  syncTemplateOverrides: s.optional(s.record(s.string(), s.unknown())),
});
