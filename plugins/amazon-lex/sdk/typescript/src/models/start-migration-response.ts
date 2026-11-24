import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { migrationStrategy1Schema, type MigrationStrategy1 } from "./migration-strategy1.js";
import { v1BotLocale2Schema, type V1BotLocale2 } from "./v1-bot-locale2.js";

export type StartMigrationResponse = {
  /** The name of the Amazon Lex V1 bot that you are migrating to Amazon Lex V2. */
  v1BotName?: string;
  /** The version of the bot to migrate to Amazon Lex V2. */
  v1BotVersion?: string;
  /** The locale used for the Amazon Lex V1 bot. */
  v1BotLocale?: V1BotLocale2;
  /** The unique identifier for the Amazon Lex V2 bot. */
  v2BotId?: string;
  /** The IAM role that Amazon Lex uses to run the Amazon Lex V2 bot. */
  v2BotRole?: string;
  /** The unique identifier that Amazon Lex assigned to the migration. */
  migrationId?: string;
  /** The strategy used to conduct the migration. */
  migrationStrategy?: MigrationStrategy1;
  /** The date and time that the migration started. */
  migrationTimestamp?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startMigrationResponseSchema: Schema<StartMigrationResponse> = s.object<StartMigrationResponse>(
  {
    v1BotName: s.optional(s.string()),
    v1BotVersion: s.optional(s.string()),
    v1BotLocale: s.optional(s.lazy(() => v1BotLocale2Schema)),
    v2BotId: s.optional(s.string()),
    v2BotRole: s.optional(s.string()),
    migrationId: s.optional(s.string()),
    migrationStrategy: s.optional(s.lazy(() => migrationStrategy1Schema)),
    migrationTimestamp: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
