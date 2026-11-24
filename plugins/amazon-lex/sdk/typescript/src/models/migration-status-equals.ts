import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Filters the list to contain only migrations in the specified state. */
export const MigrationStatusEquals = {
  InProgress: "IN_PROGRESS",
  Completed: "COMPLETED",
  Failed: "FAILED",
} as const;
export type MigrationStatusEquals =
  | (typeof MigrationStatusEquals)[keyof typeof MigrationStatusEquals]
  | (string & {});

export const migrationStatusEqualsSchema: EnumSchema<MigrationStatusEquals> =
  s.enumOf<MigrationStatusEquals>(MigrationStatusEquals);
