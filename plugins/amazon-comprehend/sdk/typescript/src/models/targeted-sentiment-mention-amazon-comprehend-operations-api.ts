import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mentionSentimentSchema, type MentionSentiment } from "./mention-sentiment.js";
import {
  type4AmazonComprehendOperationsApiSchema,
  type Type4AmazonComprehendOperationsApi,
} from "./type4-amazon-comprehend-operations-api.js";

export type TargetedSentimentMentionAmazonComprehendOperationsApi = {
  /**
   * Model confidence that the entity is relevant. Value range is zero to one, where one is highest
   * confidence.
   */
  score?: number;
  /** The confidence that all the entities mentioned in the group relate to the same entity. */
  groupScore?: number;
  /** The text in the document that identifies the entity. */
  text?: string;
  /** The type of the entity. Amazon Comprehend supports a variety of entity types. */
  type?: Type4AmazonComprehendOperationsApi;
  mentionSentiment?: MentionSentiment;
  /** The offset into the document text where the mention begins. */
  beginOffset?: number;
  /** The offset into the document text where the mention ends. */
  endOffset?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const targetedSentimentMentionAmazonComprehendOperationsApiSchema: Schema<TargetedSentimentMentionAmazonComprehendOperationsApi> =
  s.object<TargetedSentimentMentionAmazonComprehendOperationsApi>(
    {
      score: s.optional(s.float64()),
      groupScore: s.optional(s.float64()),
      text: s.optional(s.string()),
      type: s.optional(s.lazy(() => type4AmazonComprehendOperationsApiSchema)),
      mentionSentiment: s.optional(s.lazy(() => mentionSentimentSchema)),
      beginOffset: s.optional(s.int()),
      endOffset: s.optional(s.int()),
      _keysMap: {
        score: "Score",
        groupScore: "GroupScore",
        text: "Text",
        type: "Type",
        mentionSentiment: "MentionSentiment",
        beginOffset: "BeginOffset",
        endOffset: "EndOffset",
      },
    },
    { additionalProperties: s.json() },
  );
