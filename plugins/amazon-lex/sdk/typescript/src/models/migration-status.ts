import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the status of the migration. When the status is COMPLETE the migration is finished and
 * the bot is available in Amazon Lex V2. There may be alerts and warnings that need to be resolved
 * to complete the migration.
 */
export const MigrationStatus = {
  InProgress: "IN_PROGRESS",
  Completed: "COMPLETED",
  Failed: "FAILED",
} as const;
export type MigrationStatus = (typeof MigrationStatus)[keyof typeof MigrationStatus] | (string & {});

export const migrationStatusSchema: EnumSchema<MigrationStatus> = s.enumOf<MigrationStatus>(MigrationStatus);
