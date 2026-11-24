import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BotLocaleExportSpecification = {
  /** The identifier of the bot to create the locale for. */
  botId: string;
  /** The version of the bot to export. */
  botVersion: string;
  /**
   * The identifier of the language and locale to export. The string must match one of the locales
   * in the bot.
   */
  localeId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const botLocaleExportSpecificationSchema: Schema<BotLocaleExportSpecification> =
  s.object<BotLocaleExportSpecification>(
    {
      botId: s.string(),
      botVersion: s.string(),
      localeId: s.string(),
    },
    { additionalProperties: s.json() },
  );
