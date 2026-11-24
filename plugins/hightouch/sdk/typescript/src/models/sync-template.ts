import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  syncTemplateOverrideOptionSchema,
  type SyncTemplateOverrideOption,
} from "./sync-template-override-option.js";

/**
 * A sync template defines a reusable sync configuration that can be shared across multiple syncs.
 * User Groups can be granted access to templates so users can create syncs from them without seeing
 * the raw destination credentials.
 */
export type SyncTemplate = {
  /** The sync template's id */
  id: number;
  /** The sync template's name */
  name: string;
  /** The sync template's description */
  description?: string | null;
  /** The id of the workspace that the sync template belongs to */
  workspaceId: number;
  /** The timestamp when the sync template was created */
  createdAt: Date;
  /** The timestamp when the sync template was last updated */
  updatedAt: Date;
  /** The id of the parent Model that the sync template is connected to */
  modelId: number;
  /**
   * The id of the Destination that the sync template is connected to. Cannot be changed after
   * creation.
   */
  destinationId: number;
  /**
   * The sync template's configuration. The schema depends on the destination type.
   *
   * Consumers should NOT make assumptions on the contents of the configuration. It may change as
   * Hightouch updates its internal code.
   */
  configuration: Record<string, unknown>;
  /**
   * The sync template's schedule. May be null if the template does not impose a schedule on its
   * child syncs.
   */
  schedule: Record<string, unknown> | null;
  /** Whether the sync template's schedule is paused */
  schedulePaused: boolean;
  /** The tags of the sync template */
  tags: Record<string, string>;
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
  overrideConfig: Record<string, SyncTemplateOverrideOption> | null;
};

export const syncTemplateSchema: Schema<SyncTemplate> = s.object<SyncTemplate>({
  id: s.float64(),
  name: s.string(),
  description: s.optionalNullable(s.string()),
  workspaceId: s.float64(),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  modelId: s.float64(),
  destinationId: s.float64(),
  configuration: s.record(s.string(), s.unknown()),
  schedule: s.nullable(s.record(s.string(), s.unknown())),
  schedulePaused: s.boolean(),
  tags: s.record(s.string(), s.string()),
  matchboosterRegion: s.optionalNullable(s.string()),
  overrideConfig: s.nullable(
    s.record(
      s.string(),
      s.lazy(() => syncTemplateOverrideOptionSchema),
    ),
  ),
});
