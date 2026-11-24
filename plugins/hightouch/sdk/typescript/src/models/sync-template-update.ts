import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  syncTemplateOverrideOptionSchema,
  type SyncTemplateOverrideOption,
} from "./sync-template-override-option.js";

/** The input for updating a Sync Template. `destinationId` cannot be changed after creation. */
export type SyncTemplateUpdate = {
  /** The sync template's name */
  name?: string;
  /**
   * The sync template's configuration. The schema depends on the destination type.
   *
   * Consumers should NOT make assumptions on the contents of the configuration. It may change as
   * Hightouch updates its internal code.
   */
  configuration?: Record<string, unknown>;
  /** The sync template's description */
  description?: string | null;
  /** The id of the parent Model that the sync template is connected to */
  modelId?: number;
  /**
   * The sync template's schedule. May be null if the template does not impose a schedule on its
   * child syncs.
   */
  schedule?: Record<string, unknown> | null;
  /** Whether the sync template's schedule is paused */
  schedulePaused?: boolean;
  /** The tags of the sync template */
  tags?: Record<string, string>;
  /**
   * Match Booster region for syncs created from this template. Null means inherit the model's
   * single-region default at runtime.
   */
  matchboosterRegion?: string | null;
  /**
   * Which configuration fields syncs created from this template may override, keyed by
   * configuration field path (for example "externalIdMapping" or "target.schema"). A field is
   * unlocked when listed with `overridable: true`; every other field is locked to the template's
   * value. Null when no field is overridable.
   */
  overrideConfig?: Record<string, SyncTemplateOverrideOption> | null;
};

export const syncTemplateUpdateSchema: Schema<SyncTemplateUpdate> = s.object<SyncTemplateUpdate>({
  name: s.optional(s.string()),
  configuration: s.optional(s.record(s.string(), s.unknown())),
  description: s.optionalNullable(s.string()),
  modelId: s.optional(s.float64()),
  schedule: s.optionalNullable(s.record(s.string(), s.unknown())),
  schedulePaused: s.optional(s.boolean()),
  tags: s.optional(s.record(s.string(), s.string())),
  matchboosterRegion: s.optionalNullable(s.string()),
  overrideConfig: s.optionalNullable(
    s.record(
      s.string(),
      s.lazy(() => syncTemplateOverrideOptionSchema),
    ),
  ),
});
