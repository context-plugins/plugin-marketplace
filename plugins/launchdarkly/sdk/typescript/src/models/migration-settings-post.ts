import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MigrationSettingsPost = {
  /** Context kind for a migration with 6 stages, where data is being moved */
  contextKind?: string;
  stageCount: number;
};

export const migrationSettingsPostSchema: Schema<MigrationSettingsPost> = s.object<MigrationSettingsPost>({
  contextKind: s.optional(s.string()),
  stageCount: s.int(),
});
