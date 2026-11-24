import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botLocaleStatusSchema, type BotLocaleStatus } from "./bot-locale-status.js";

export type BotLocaleSummary = {
  /** The language and locale of the bot locale. */
  localeId?: string;
  /** The name of the bot locale. */
  localeName?: string;
  /** The description of the bot locale. */
  description?: string;
  /** The current status of the bot locale. When the status is Built the locale is ready for use. */
  botLocaleStatus?: BotLocaleStatus;
  /** A timestamp of the date and time that the bot locale was last updated. */
  lastUpdatedDateTime?: Date;
  /** A timestamp of the date and time that the bot locale was last built. */
  lastBuildSubmittedDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const botLocaleSummarySchema: Schema<BotLocaleSummary> = s.object<BotLocaleSummary>(
  {
    localeId: s.optional(s.string()),
    localeName: s.optional(s.string()),
    description: s.optional(s.string()),
    botLocaleStatus: s.optional(s.lazy(() => botLocaleStatusSchema)),
    lastUpdatedDateTime: s.optional(s.dateTime()),
    lastBuildSubmittedDateTime: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
