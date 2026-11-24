import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { callAnalyticsEntitySchema, type CallAnalyticsEntity } from "./call-analytics-entity.js";
import { callAnalyticsItemSchema, type CallAnalyticsItem } from "./call-analytics-item.js";
import {
  callAnalyticsLanguageWithScoreSchema,
  type CallAnalyticsLanguageWithScore,
} from "./call-analytics-language-with-score.js";
import { issueDetectedSchema, type IssueDetected } from "./issue-detected.js";
import {
  languageCode1AmazonTranscribeServiceOperationsApiSchema,
  type LanguageCode1AmazonTranscribeServiceOperationsApi,
} from "./language-code1-amazon-transcribe-service-operations-api.js";
import {
  participantRole1AmazonTranscribeServiceOperationsApiSchema,
  type ParticipantRole1AmazonTranscribeServiceOperationsApi,
} from "./participant-role1-amazon-transcribe-service-operations-api.js";
import {
  sentimentAmazonTranscribeServiceOperationsApiSchema,
  type SentimentAmazonTranscribeServiceOperationsApi,
} from "./sentiment-amazon-transcribe-service-operations-api.js";

export type UtteranceEvent = {
  /** The unique identifier that is associated with the specified UtteranceEvent. */
  utteranceId?: string;
  /** Indicates whether the segment in the UtteranceEvent is complete (FALSE) or partial (TRUE). */
  isPartial?: boolean;
  /** Provides the role of the speaker for each audio channel, either CUSTOMER or AGENT. */
  participantRole?: ParticipantRole1AmazonTranscribeServiceOperationsApi;
  /**
   * The time, in milliseconds, from the beginning of the audio stream to the start of the
   * UtteranceEvent.
   */
  beginOffsetMillis?: number;
  /**
   * The time, in milliseconds, from the beginning of the audio stream to the start of the
   * UtteranceEvent.
   */
  endOffsetMillis?: number;
  /** Contains transcribed text. */
  transcript?: string;
  /**
   * Contains words, phrases, or punctuation marks that are associated with the specified
   * UtteranceEvent.
   */
  items?: CallAnalyticsItem[];
  /**
   * Contains entities identified as personally identifiable information (PII) in your transcription
   * output.
   */
  entities?: CallAnalyticsEntity[];
  /** Provides the sentiment that was detected in the specified segment. */
  sentiment?: SentimentAmazonTranscribeServiceOperationsApi;
  /** Provides the issue that was detected in the specified segment. */
  issuesDetected?: IssueDetected[];
  /** The language code that represents the language spoken in your audio stream. */
  languageCode?: LanguageCode1AmazonTranscribeServiceOperationsApi;
  /** The language code of the dominant language identified in your stream. */
  languageIdentification?: CallAnalyticsLanguageWithScore[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const utteranceEventSchema: Schema<UtteranceEvent> = s.object<UtteranceEvent>(
  {
    utteranceId: s.optional(s.string()),
    isPartial: s.optional(s.boolean()),
    participantRole: s.optional(s.lazy(() => participantRole1AmazonTranscribeServiceOperationsApiSchema)),
    beginOffsetMillis: s.optional(s.int()),
    endOffsetMillis: s.optional(s.int()),
    transcript: s.optional(s.string()),
    items: s.optional(s.array(s.lazy(() => callAnalyticsItemSchema))),
    entities: s.optional(s.array(s.lazy(() => callAnalyticsEntitySchema))),
    sentiment: s.optional(s.lazy(() => sentimentAmazonTranscribeServiceOperationsApiSchema)),
    issuesDetected: s.optional(s.array(s.lazy(() => issueDetectedSchema))),
    languageCode: s.optional(s.lazy(() => languageCode1AmazonTranscribeServiceOperationsApiSchema)),
    languageIdentification: s.optional(s.array(s.lazy(() => callAnalyticsLanguageWithScoreSchema))),
    _keysMap: {
      utteranceId: "UtteranceId",
      isPartial: "IsPartial",
      participantRole: "ParticipantRole",
      beginOffsetMillis: "BeginOffsetMillis",
      endOffsetMillis: "EndOffsetMillis",
      transcript: "Transcript",
      items: "Items",
      entities: "Entities",
      sentiment: "Sentiment",
      issuesDetected: "IssuesDetected",
      languageCode: "LanguageCode",
      languageIdentification: "LanguageIdentification",
    },
  },
  { additionalProperties: s.json() },
);
