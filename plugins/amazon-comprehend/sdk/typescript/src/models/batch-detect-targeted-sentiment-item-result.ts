import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { targetedSentimentEntitySchema, type TargetedSentimentEntity } from "./targeted-sentiment-entity.js";

export type BatchDetectTargetedSentimentItemResult = {
  /** The zero-based index of this result in the input list. */
  index?: number;
  /** An array of targeted sentiment entities. */
  entities?: TargetedSentimentEntity[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchDetectTargetedSentimentItemResultSchema: Schema<BatchDetectTargetedSentimentItemResult> =
  s.object<BatchDetectTargetedSentimentItemResult>(
    {
      index: s.optional(s.int()),
      entities: s.optional(s.array(s.lazy(() => targetedSentimentEntitySchema))),
      _keysMap: {
        index: "Index",
        entities: "Entities",
      },
    },
    { additionalProperties: s.json() },
  );
