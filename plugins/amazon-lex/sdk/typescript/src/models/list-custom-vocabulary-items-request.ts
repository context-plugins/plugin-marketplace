import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListCustomVocabularyItemsRequest = {
  /** The identifier of the version of the bot associated with this custom vocabulary. */
  botId: string;
  /** The bot version of the bot to the list custom vocabulary request. */
  botVersion: string;
  /**
   * The identifier of the language and locale where this custom vocabulary is used. The string must
   * match one of the supported locales. For more information, see Supported languages
   * (https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
   */
  localeId: string;
  /** The maximum number of items returned by the list operation. */
  maxResults?: number;
  /** The nextToken identifier to the list custom vocabulary request. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listCustomVocabularyItemsRequestSchema: Schema<ListCustomVocabularyItemsRequest> =
  s.object<ListCustomVocabularyItemsRequest>(
    {
      botId: s.string(),
      botVersion: s.string(),
      localeId: s.string(),
      maxResults: s.optional(s.int()),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
