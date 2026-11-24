import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  targetedSentimentMentionSchema,
  type TargetedSentimentMention,
} from "./targeted-sentiment-mention.js";

export type TargetedSentimentEntity = {
  /** One or more index into the Mentions array that provides the best name for the entity group. */
  descriptiveMentionIndex?: number[];
  /**
   * An array of mentions of the entity in the document. The array represents a co-reference group.
   * See Co-reference group for an example.
   */
  mentions?: TargetedSentimentMention[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const targetedSentimentEntitySchema: Schema<TargetedSentimentEntity> =
  s.object<TargetedSentimentEntity>(
    {
      descriptiveMentionIndex: s.optional(s.array(s.int())),
      mentions: s.optional(s.array(s.lazy(() => targetedSentimentMentionSchema))),
      _keysMap: {
        descriptiveMentionIndex: "DescriptiveMentionIndex",
        mentions: "Mentions",
      },
    },
    { additionalProperties: s.json() },
  );
