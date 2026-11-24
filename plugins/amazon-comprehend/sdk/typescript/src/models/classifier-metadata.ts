import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classifierEvaluationMetricsSchema,
  type ClassifierEvaluationMetrics,
} from "./classifier-evaluation-metrics.js";

export type ClassifierMetadata = {
  /** The number of labels in the input data. */
  numberOfLabels?: number;
  /**
   * The number of documents in the input data that were used to train the classifier. Typically
   * this is 80 to 90 percent of the input documents.
   */
  numberOfTrainedDocuments?: number;
  /**
   * The number of documents in the input data that were used to test the classifier. Typically this
   * is 10 to 20 percent of the input documents, up to 10,000 documents.
   */
  numberOfTestDocuments?: number;
  evaluationMetrics?: ClassifierEvaluationMetrics;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const classifierMetadataSchema: Schema<ClassifierMetadata> = s.object<ClassifierMetadata>(
  {
    numberOfLabels: s.optional(s.int()),
    numberOfTrainedDocuments: s.optional(s.int()),
    numberOfTestDocuments: s.optional(s.int()),
    evaluationMetrics: s.optional(s.lazy(() => classifierEvaluationMetricsSchema)),
    _keysMap: {
      numberOfLabels: "NumberOfLabels",
      numberOfTrainedDocuments: "NumberOfTrainedDocuments",
      numberOfTestDocuments: "NumberOfTestDocuments",
      evaluationMetrics: "EvaluationMetrics",
    },
  },
  { additionalProperties: s.json() },
);
