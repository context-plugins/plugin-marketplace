import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entityTypesEvaluationMetricsSchema,
  type EntityTypesEvaluationMetrics,
} from "./entity-types-evaluation-metrics.js";

export type EntityRecognizerMetadataEntityTypesListItem = {
  /** Type of entity from the list of entity types in the metadata of an entity recognizer. */
  type?: string;
  evaluationMetrics?: EntityTypesEvaluationMetrics;
  /** Indicates the number of times the given entity type was seen in the training data. */
  numberOfTrainMentions?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entityRecognizerMetadataEntityTypesListItemSchema: Schema<EntityRecognizerMetadataEntityTypesListItem> =
  s.object<EntityRecognizerMetadataEntityTypesListItem>(
    {
      type: s.optional(s.string()),
      evaluationMetrics: s.optional(s.lazy(() => entityTypesEvaluationMetricsSchema)),
      numberOfTrainMentions: s.optional(s.int()),
      _keysMap: {
        type: "Type",
        evaluationMetrics: "EvaluationMetrics",
        numberOfTrainMentions: "NumberOfTrainMentions",
      },
    },
    { additionalProperties: s.json() },
  );
