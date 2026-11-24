import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { targetedSentimentEntitySchema, type TargetedSentimentEntity } from "./targeted-sentiment-entity.js";

export type DetectTargetedSentimentResponse = {
  /** Targeted sentiment analysis for each of the entities identified in the input text. */
  entities?: TargetedSentimentEntity[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectTargetedSentimentResponseSchema: Schema<DetectTargetedSentimentResponse> =
  s.object<DetectTargetedSentimentResponse>(
    {
      entities: s.optional(s.array(s.lazy(() => targetedSentimentEntitySchema))),
      _keysMap: {
        entities: "Entities",
      },
    },
    { additionalProperties: s.json() },
  );
