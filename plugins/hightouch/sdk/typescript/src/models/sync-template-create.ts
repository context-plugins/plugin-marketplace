import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  syncTemplateOverrideOptionSchema,
  type SyncTemplateOverrideOption,
} from "./sync-template-override-option.js";

/**
 * The input for creating a Sync Template. A `slug` is generated automatically from the name; it is
 * a legacy column and is no longer accepted on input.
 */
export type SyncTemplateCreate = {
  name: string;
  description?: string;
  modelId: number;
  destinationId: number;
  configuration: Record<string, unknown>;
  schedule?: Record<string, unknown>;
  schedulePaused?: boolean;
  matchboosterRegion?: string | null;
  overrideConfig?: Record<string, SyncTemplateOverrideOption> | null;
};

export const syncTemplateCreateSchema: Schema<SyncTemplateCreate> = s.object<SyncTemplateCreate>({
  name: s.string(),
  description: s.optional(s.string()),
  modelId: s.float64(),
  destinationId: s.float64(),
  configuration: s.record(s.string(), s.unknown()),
  schedule: s.optional(s.record(s.string(), s.unknown())),
  schedulePaused: s.optional(s.boolean()),
  matchboosterRegion: s.optionalNullable(s.string()),
  overrideConfig: s.optionalNullable(
    s.record(
      s.string(),
      s.lazy(() => syncTemplateOverrideOptionSchema),
    ),
  ),
});
