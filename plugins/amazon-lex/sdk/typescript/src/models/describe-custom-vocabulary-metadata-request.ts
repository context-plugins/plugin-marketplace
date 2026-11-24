import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeCustomVocabularyMetadataRequest = {
  /** The unique identifier of the bot that contains the custom vocabulary. */
  botId: string;
  /** The bot version of the bot to return metadata for. */
  botVersion: string;
  /** The locale to return the custom vocabulary information for. The locale must be en_GB. */
  localeId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeCustomVocabularyMetadataRequestSchema: Schema<DescribeCustomVocabularyMetadataRequest> =
  s.object<DescribeCustomVocabularyMetadataRequest>(
    {
      botId: s.string(),
      botVersion: s.string(),
      localeId: s.string(),
    },
    { additionalProperties: s.json() },
  );
