import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Schema synchronization mode */
export const SchemaSyncMode = {
  Add: "Add",
  ForceSync: "Force Sync",
} as const;
export type SchemaSyncMode = (typeof SchemaSyncMode)[keyof typeof SchemaSyncMode] | (string & {});

export const schemaSyncModeSchema: EnumSchema<SchemaSyncMode> = s.enumOf<SchemaSyncMode>(SchemaSyncMode);
