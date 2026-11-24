import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { migrationStrategySchema, type MigrationStrategy } from "./migration-strategy.js";

export type StartMigrationRequest = {
  /** The name of the Amazon Lex V1 bot that you are migrating to Amazon Lex V2. */
  v1BotName: string;
  /**
   * The version of the bot to migrate to Amazon Lex V2. You can migrate the $LATEST version as well
   * as any numbered version.
   */
  v1BotVersion: string;
  /**
   * The name of the Amazon Lex V2 bot that you are migrating the Amazon Lex V1 bot to. If the
   * Amazon Lex V2 bot doesn't exist, you must use the CREATE_NEW migration strategy. If the Amazon
   * Lex V2 bot exists, you must use the UPDATE_EXISTING migration strategy to change the contents
   * of the Amazon Lex V2 bot.
   */
  v2BotName: string;
  /** The IAM role that Amazon Lex uses to run the Amazon Lex V2 bot. */
  v2BotRole: string;
  /**
   * The strategy used to conduct the migration. CREATE_NEW - Creates a new Amazon Lex V2 bot and
   * migrates the Amazon Lex V1 bot to the new bot. UPDATE_EXISTING - Overwrites the existing Amazon
   * Lex V2 bot metadata and the locale being migrated. It doesn't change any other locales in the
   * Amazon Lex V2 bot. If the locale doesn't exist, a new locale is created in the Amazon Lex V2
   * bot.
   */
  migrationStrategy: MigrationStrategy;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startMigrationRequestSchema: Schema<StartMigrationRequest> = s.object<StartMigrationRequest>(
  {
    v1BotName: s.string(),
    v1BotVersion: s.string(),
    v2BotName: s.string(),
    v2BotRole: s.string(),
    migrationStrategy: migrationStrategySchema,
  },
  { additionalProperties: s.json() },
);
