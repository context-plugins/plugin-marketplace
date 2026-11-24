import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SchemaSyncMode1 = {
  Add: "Add",
  ForceSync: "Force Sync",
} as const;
export type SchemaSyncMode1 = (typeof SchemaSyncMode1)[keyof typeof SchemaSyncMode1] | (string & {});

export const schemaSyncMode1Schema: EnumSchema<SchemaSyncMode1> = s.enumOf<SchemaSyncMode1>(SchemaSyncMode1);
