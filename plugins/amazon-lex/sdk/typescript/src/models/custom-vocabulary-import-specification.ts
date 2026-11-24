import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CustomVocabularyImportSpecification = {
  /** The identifier of the bot to import the custom vocabulary to. */
  botId: string;
  /** The version of the bot to import the custom vocabulary to. */
  botVersion: string;
  /** The identifier of the local to import the custom vocabulary to. The value must be en_GB. */
  localeId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customVocabularyImportSpecificationSchema: Schema<CustomVocabularyImportSpecification> =
  s.object<CustomVocabularyImportSpecification>(
    {
      botId: s.string(),
      botVersion: s.string(),
      localeId: s.string(),
    },
    { additionalProperties: s.json() },
  );
