import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customVocabularyStatus1Schema, type CustomVocabularyStatus1 } from "./custom-vocabulary-status1.js";

export type DescribeCustomVocabularyMetadataResponse = {
  /** The identifier of the bot that contains the custom vocabulary. */
  botId?: string;
  /** The version of the bot that contains the custom vocabulary to describe. */
  botVersion?: string;
  /** The locale that contains the custom vocabulary to describe. */
  localeId?: string;
  /**
   * The status of the custom vocabulary. If the status is Ready the custom vocabulary is ready to
   * use.
   */
  customVocabularyStatus?: CustomVocabularyStatus1;
  /** The date and time that the custom vocabulary was created. */
  creationDateTime?: Date;
  /** The date and time that the custom vocabulary was last updated. */
  lastUpdatedDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeCustomVocabularyMetadataResponseSchema: Schema<DescribeCustomVocabularyMetadataResponse> =
  s.object<DescribeCustomVocabularyMetadataResponse>(
    {
      botId: s.optional(s.string()),
      botVersion: s.optional(s.string()),
      localeId: s.optional(s.string()),
      customVocabularyStatus: s.optional(s.lazy(() => customVocabularyStatus1Schema)),
      creationDateTime: s.optional(s.dateTime()),
      lastUpdatedDateTime: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
