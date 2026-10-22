import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlagMigrationSettingsRep = {
  /** The context kind targeted by this migration flag. Only applicable for six-stage migrations. */
  contextKind?: string;
  /** The number of stages for this migration flag */
  stageCount?: number;
};

export const flagMigrationSettingsRepSchema: Schema<FlagMigrationSettingsRep> =
  s.object<FlagMigrationSettingsRep>({
    contextKind: s.optional(s.string()),
    stageCount: s.optional(s.int()),
  });
