import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { migrationAlertSchema, type MigrationAlert } from "./migration-alert.js";
import { migrationStatusSchema, type MigrationStatus } from "./migration-status.js";
import { migrationStrategySchema, type MigrationStrategy } from "./migration-strategy.js";
import { v1BotLocaleSchema, type V1BotLocale } from "./v1-bot-locale.js";

export type GetMigrationResponse = {
  /**
   * The unique identifier of the migration. This is the same as the identifier used when calling
   * the GetMigration operation.
   */
  migrationId?: string;
  /** The name of the Amazon Lex V1 bot migrated to Amazon Lex V2. */
  v1BotName?: string;
  /** The version of the Amazon Lex V1 bot migrated to Amazon Lex V2. */
  v1BotVersion?: string;
  /** The locale of the Amazon Lex V1 bot migrated to Amazon Lex V2. */
  v1BotLocale?: V1BotLocale;
  /** The unique identifier of the Amazon Lex V2 bot that the Amazon Lex V1 is being migrated to. */
  v2BotId?: string;
  /** The IAM role that Amazon Lex uses to run the Amazon Lex V2 bot. */
  v2BotRole?: string;
  /**
   * Indicates the status of the migration. When the status is COMPLETE the migration is finished
   * and the bot is available in Amazon Lex V2. There may be alerts and warnings that need to be
   * resolved to complete the migration.
   */
  migrationStatus?: MigrationStatus;
  /**
   * The strategy used to conduct the migration. CREATE_NEW - Creates a new Amazon Lex V2 bot and
   * migrates the Amazon Lex V1 bot to the new bot. UPDATE_EXISTING - Overwrites the existing Amazon
   * Lex V2 bot metadata and the locale being migrated. It doesn't change any other locales in the
   * Amazon Lex V2 bot. If the locale doesn't exist, a new locale is created in the Amazon Lex V2
   * bot.
   */
  migrationStrategy?: MigrationStrategy;
  /** The date and time that the migration started. */
  migrationTimestamp?: Date;
  /**
   * A list of alerts and warnings that indicate issues with the migration for the Amazon Lex V1 bot
   * to Amazon Lex V2. You receive a warning when an Amazon Lex V1 feature has a different
   * implementation if Amazon Lex V2. For more information, see Migrating a bot in the Amazon Lex V2
   * developer guide.
   */
  alerts?: MigrationAlert[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getMigrationResponseSchema: Schema<GetMigrationResponse> = s.object<GetMigrationResponse>(
  {
    migrationId: s.optional(s.string()),
    v1BotName: s.optional(s.string()),
    v1BotVersion: s.optional(s.string()),
    v1BotLocale: s.optional(s.lazy(() => v1BotLocaleSchema)),
    v2BotId: s.optional(s.string()),
    v2BotRole: s.optional(s.string()),
    migrationStatus: s.optional(s.lazy(() => migrationStatusSchema)),
    migrationStrategy: s.optional(s.lazy(() => migrationStrategySchema)),
    migrationTimestamp: s.optional(s.dateTime()),
    alerts: s.optional(s.array(s.lazy(() => migrationAlertSchema))),
  },
  { additionalProperties: s.json() },
);
