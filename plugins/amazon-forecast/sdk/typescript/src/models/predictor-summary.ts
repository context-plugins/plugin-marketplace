import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  referencePredictorSummarySchema,
  type ReferencePredictorSummary,
} from "./reference-predictor-summary.js";

export type PredictorSummary = {
  /** The ARN of the predictor. */
  predictorArn?: string;
  /** The name of the predictor. */
  predictorName?: string;
  /**
   * The Amazon Resource Name (ARN) of the dataset group that contains the data used to train the
   * predictor.
   */
  datasetGroupArn?: string;
  /** Whether AutoPredictor was used to create the predictor. */
  isAutoPredictor?: boolean;
  referencePredictorSummary?: ReferencePredictorSummary;
  /**
   * The status of the predictor. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS,
   * CREATE_FAILED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED CREATE_STOPPING, CREATE_STOPPED
   * The Status of the predictor must be ACTIVE before you can use the predictor to create a
   * forecast.
   */
  status?: string;
  /** If an error occurred, an informational message about the error. */
  message?: string;
  /** When the model training task was created. */
  creationTime?: Date;
  /**
   * The last time the resource was modified. The timestamp depends on the status of the job:
   * CREATE_PENDING - The CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING
   * - The current timestamp. CREATE_STOPPED - When the job stopped. ACTIVE or CREATE_FAILED - When
   * the job finished or failed.
   */
  lastModificationTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const predictorSummarySchema: Schema<PredictorSummary> = s.object<PredictorSummary>(
  {
    predictorArn: s.optional(s.string()),
    predictorName: s.optional(s.string()),
    datasetGroupArn: s.optional(s.string()),
    isAutoPredictor: s.optional(s.boolean()),
    referencePredictorSummary: s.optional(s.lazy(() => referencePredictorSummarySchema)),
    status: s.optional(s.string()),
    message: s.optional(s.string()),
    creationTime: s.optional(s.dateTime()),
    lastModificationTime: s.optional(s.dateTime()),
    _keysMap: {
      predictorArn: "PredictorArn",
      predictorName: "PredictorName",
      datasetGroupArn: "DatasetGroupArn",
      isAutoPredictor: "IsAutoPredictor",
      referencePredictorSummary: "ReferencePredictorSummary",
      status: "Status",
      message: "Message",
      creationTime: "CreationTime",
      lastModificationTime: "LastModificationTime",
    },
  },
  { additionalProperties: s.json() },
);
