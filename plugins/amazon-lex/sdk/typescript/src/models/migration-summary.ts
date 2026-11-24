import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { migrationStatus1Schema, type MigrationStatus1 } from "./migration-status1.js";
import { migrationStrategy1Schema, type MigrationStrategy1 } from "./migration-strategy1.js";
import { v1BotLocale1Schema, type V1BotLocale1 } from "./v1-bot-locale1.js";

export type MigrationSummary = {
  /** The unique identifier that Amazon Lex assigned to the migration. */
  migrationId?: string;
  /** The name of the Amazon Lex V1 bot that is the source of the migration. */
  v1BotName?: string;
  /** The version of the Amazon Lex V1 bot that is the source of the migration. */
  v1BotVersion?: string;
  /** The locale of the Amazon Lex V1 bot that is the source of the migration. */
  v1BotLocale?: V1BotLocale1;
  /** The unique identifier of the Amazon Lex V2 that is the destination of the migration. */
  v2BotId?: string;
  /** The IAM role that Amazon Lex uses to run the Amazon Lex V2 bot. */
  v2BotRole?: string;
  /**
   * The status of the operation. When the status is COMPLETE the bot is available in Amazon Lex V2.
   * There may be alerts and warnings that need to be resolved to complete the migration.
   */
  migrationStatus?: MigrationStatus1;
  /** The strategy used to conduct the migration. */
  migrationStrategy?: MigrationStrategy1;
  /** The date and time that the migration started. */
  migrationTimestamp?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const migrationSummarySchema: Schema<MigrationSummary> = s.object<MigrationSummary>(
  {
    migrationId: s.optional(s.string()),
    v1BotName: s.optional(s.string()),
    v1BotVersion: s.optional(s.string()),
    v1BotLocale: s.optional(s.lazy(() => v1BotLocale1Schema)),
    v2BotId: s.optional(s.string()),
    v2BotRole: s.optional(s.string()),
    migrationStatus: s.optional(s.lazy(() => migrationStatus1Schema)),
    migrationStrategy: s.optional(s.lazy(() => migrationStrategy1Schema)),
    migrationTimestamp: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
