import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. Defines the behavior of the migration execution. */
export const Mode = {
  MigrationModeUnspecified: "MIGRATION_MODE_UNSPECIFIED",
  Backfill: "BACKFILL",
} as const;
export type Mode = (typeof Mode)[keyof typeof Mode] | (string & {});

export const modeSchema: EnumSchema<Mode> = s.enumOf<Mode>(Mode);
