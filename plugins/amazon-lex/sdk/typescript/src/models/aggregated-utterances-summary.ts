import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AggregatedUtterancesSummary = {
  /**
   * The text of the utterance. If the utterance was used with the RecognizeUtterance operation, the
   * text is the transcription of the audio utterance.
   */
  utterance?: string;
  /**
   * The number of times that the utterance was detected by Amazon Lex during the time period. When
   * an utterance is detected, it activates an intent or a slot.
   */
  hitCount?: number;
  /**
   * The number of times that the utterance was missed by Amazon Lex An utterance is missed when it
   * doesn't activate an intent or slot.
   */
  missedCount?: number;
  /**
   * The date and time that the utterance was first recorded in the time window for aggregation. An
   * utterance may have been sent to Amazon Lex before that time, but only utterances within the
   * time window are counted.
   */
  utteranceFirstRecordedInAggregationDuration?: Date;
  /**
   * The last date and time that an utterance was recorded in the time window for aggregation. An
   * utterance may be sent to Amazon Lex after that time, but only utterances within the time window
   * are counted.
   */
  utteranceLastRecordedInAggregationDuration?: Date;
  /**
   * Aggregated utterance data may contain utterances from versions of your bot that have since been
   * deleted. When the aggregated contains this kind of data, this field is set to true.
   */
  containsDataFromDeletedResources?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const aggregatedUtterancesSummarySchema: Schema<AggregatedUtterancesSummary> =
  s.object<AggregatedUtterancesSummary>(
    {
      utterance: s.optional(s.string()),
      hitCount: s.optional(s.int()),
      missedCount: s.optional(s.int()),
      utteranceFirstRecordedInAggregationDuration: s.optional(s.dateTime()),
      utteranceLastRecordedInAggregationDuration: s.optional(s.dateTime()),
      containsDataFromDeletedResources: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
