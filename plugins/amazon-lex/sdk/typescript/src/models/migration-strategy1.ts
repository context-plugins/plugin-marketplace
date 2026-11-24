import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The strategy used to conduct the migration. */
export const MigrationStrategy1 = {
  CreateNew: "CREATE_NEW",
  UpdateExisting: "UPDATE_EXISTING",
} as const;
export type MigrationStrategy1 = (typeof MigrationStrategy1)[keyof typeof MigrationStrategy1] | (string & {});

export const migrationStrategy1Schema: EnumSchema<MigrationStrategy1> =
  s.enumOf<MigrationStrategy1>(MigrationStrategy1);
