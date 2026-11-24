import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scheduleSchema, type Schedule } from "./schedule.js";

/** The input for updating a Sync */
export type SyncUpdate = {
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
  configuration?: Record<string, unknown>;
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
  schedule?: Schedule | null;
  /** Whether the sync has been disabled by the user. */
  disabled?: boolean;
  /**
   * The id of a Sync Template to bind the sync to, or null to detach the sync from its template.
   * Binding requires the template's destination to match the sync's destination; while bound, the
   * sync follows the template's configuration and `configuration` cannot be set directly. Detaching
   * copies the sync's effective configuration, schedule and other inherited settings onto the sync
   * so it keeps running unchanged.
   */
  syncTemplateId?: number | null;
  /**
   * Replaces the sync's template overrides, keyed by configuration field path. Only fields the
   * template's `overrideConfig` marks as overridable are accepted; null clears every override.
   * Requires the sync to be, or to become, bound to a sync template.
   */
  syncTemplateOverrides?: Record<string, unknown> | null;
};

export const syncUpdateSchema: Schema<SyncUpdate> = s.object<SyncUpdate>({
  configuration: s.optional(s.record(s.string(), s.unknown())),
  schedule: s.optionalNullable(s.lazy(() => scheduleSchema)),
  disabled: s.optional(s.boolean()),
  syncTemplateId: s.optionalNullable(s.float64()),
  syncTemplateOverrides: s.optionalNullable(s.record(s.string(), s.unknown())),
});
