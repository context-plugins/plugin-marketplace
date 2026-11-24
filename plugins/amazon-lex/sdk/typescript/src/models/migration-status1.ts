import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the operation. When the status is COMPLETE the bot is available in Amazon Lex V2.
 * There may be alerts and warnings that need to be resolved to complete the migration.
 */
export const MigrationStatus1 = {
  InProgress: "IN_PROGRESS",
  Completed: "COMPLETED",
  Failed: "FAILED",
} as const;
export type MigrationStatus1 = (typeof MigrationStatus1)[keyof typeof MigrationStatus1] | (string & {});

export const migrationStatus1Schema: EnumSchema<MigrationStatus1> =
  s.enumOf<MigrationStatus1>(MigrationStatus1);
