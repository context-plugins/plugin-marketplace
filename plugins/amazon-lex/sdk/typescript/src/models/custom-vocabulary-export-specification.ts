import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CustomVocabularyExportSpecification = {
  /** The identifier of the bot that contains the custom vocabulary to export. */
  botId: string;
  /** The version of the bot that contains the custom vocabulary to export. */
  botVersion: string;
  /** The locale of the bot that contains the custom vocabulary to export. */
  localeId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customVocabularyExportSpecificationSchema: Schema<CustomVocabularyExportSpecification> =
  s.object<CustomVocabularyExportSpecification>(
    {
      botId: s.string(),
      botVersion: s.string(),
      localeId: s.string(),
    },
    { additionalProperties: s.json() },
  );
