import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlagConfigMigrationSettingsRep = {
  checkRatio?: number;
};

export const flagConfigMigrationSettingsRepSchema: Schema<FlagConfigMigrationSettingsRep> =
  s.object<FlagConfigMigrationSettingsRep>({
    checkRatio: s.optional(s.int()),
  });
