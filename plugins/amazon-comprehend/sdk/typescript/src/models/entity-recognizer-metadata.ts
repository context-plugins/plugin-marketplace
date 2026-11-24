import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entityRecognizerEvaluationMetricsSchema,
  type EntityRecognizerEvaluationMetrics,
} from "./entity-recognizer-evaluation-metrics.js";
import {
  entityRecognizerMetadataEntityTypesListItemSchema,
  type EntityRecognizerMetadataEntityTypesListItem,
} from "./entity-recognizer-metadata-entity-types-list-item.js";

export type EntityRecognizerMetadata = {
  /**
   * The number of documents in the input data that were used to train the entity recognizer.
   * Typically this is 80 to 90 percent of the input documents.
   */
  numberOfTrainedDocuments?: number;
  /**
   * The number of documents in the input data that were used to test the entity recognizer.
   * Typically this is 10 to 20 percent of the input documents.
   */
  numberOfTestDocuments?: number;
  evaluationMetrics?: EntityRecognizerEvaluationMetrics;
  /** Entity types from the metadata of an entity recognizer. */
  entityTypes?: EntityRecognizerMetadataEntityTypesListItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entityRecognizerMetadataSchema: Schema<EntityRecognizerMetadata> =
  s.object<EntityRecognizerMetadata>(
    {
      numberOfTrainedDocuments: s.optional(s.int()),
      numberOfTestDocuments: s.optional(s.int()),
      evaluationMetrics: s.optional(s.lazy(() => entityRecognizerEvaluationMetricsSchema)),
      entityTypes: s.optional(s.array(s.lazy(() => entityRecognizerMetadataEntityTypesListItemSchema))),
      _keysMap: {
        numberOfTrainedDocuments: "NumberOfTrainedDocuments",
        numberOfTestDocuments: "NumberOfTestDocuments",
        evaluationMetrics: "EvaluationMetrics",
        entityTypes: "EntityTypes",
      },
    },
    { additionalProperties: s.json() },
  );
