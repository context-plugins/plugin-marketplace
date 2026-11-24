import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { explainabilityConfigSchema, type ExplainabilityConfig } from "./explainability-config.js";

export type ExplainabilitySummary = {
  /** The Amazon Resource Name (ARN) of the Explainability. */
  explainabilityArn?: string;
  /** The name of the Explainability. */
  explainabilityName?: string;
  /**
   * The Amazon Resource Name (ARN) of the Predictor or Forecast used to create the Explainability.
   */
  resourceArn?: string;
  explainabilityConfig?: ExplainabilityConfig;
  /**
   * The status of the Explainability. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS,
   * CREATE_FAILED CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED
   */
  status?: string;
  /**
   * Information about any errors that may have occurred during the Explainability creation process.
   */
  message?: string;
  /** When the Explainability was created. */
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

export const explainabilitySummarySchema: Schema<ExplainabilitySummary> = s.object<ExplainabilitySummary>(
  {
    explainabilityArn: s.optional(s.string()),
    explainabilityName: s.optional(s.string()),
    resourceArn: s.optional(s.string()),
    explainabilityConfig: s.optional(s.lazy(() => explainabilityConfigSchema)),
    status: s.optional(s.string()),
    message: s.optional(s.string()),
    creationTime: s.optional(s.dateTime()),
    lastModificationTime: s.optional(s.dateTime()),
    _keysMap: {
      explainabilityArn: "ExplainabilityArn",
      explainabilityName: "ExplainabilityName",
      resourceArn: "ResourceArn",
      explainabilityConfig: "ExplainabilityConfig",
      status: "Status",
      message: "Message",
      creationTime: "CreationTime",
      lastModificationTime: "LastModificationTime",
    },
  },
  { additionalProperties: s.json() },
);
