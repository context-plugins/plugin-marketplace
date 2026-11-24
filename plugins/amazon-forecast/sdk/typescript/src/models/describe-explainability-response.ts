import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataSourceSchema, type DataSource } from "./data-source.js";
import { explainabilityConfigSchema, type ExplainabilityConfig } from "./explainability-config.js";
import { schemaModelSchema, type SchemaModel } from "./schema-model.js";

export type DescribeExplainabilityResponse = {
  /** The Amazon Resource Name (ARN) of the Explainability. */
  explainabilityArn?: string;
  /** The name of the Explainability. */
  explainabilityName?: string;
  /**
   * The Amazon Resource Name (ARN) of the Predictor or Forecast used to create the Explainability
   * resource.
   */
  resourceArn?: string;
  explainabilityConfig?: ExplainabilityConfig;
  /** Whether the visualization was enabled for the Explainability resource. */
  enableVisualization?: boolean;
  dataSource?: DataSource;
  schema?: SchemaModel;
  /** If TimePointGranularity is set to SPECIFIC, the first time point in the Explainability. */
  startDateTime?: string;
  /** If TimePointGranularity is set to SPECIFIC, the last time point in the Explainability. */
  endDateTime?: string;
  /** The estimated time remaining in minutes for the CreateExplainability job to complete. */
  estimatedTimeRemainingInMinutes?: number;
  /** If an error occurred, a message about the error. */
  message?: string;
  /**
   * The status of the Explainability resource. States include: ACTIVE CREATE_PENDING,
   * CREATE_IN_PROGRESS, CREATE_FAILED CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING,
   * DELETE_IN_PROGRESS, DELETE_FAILED
   */
  status?: string;
  /** When the Explainability resource was created. */
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

export const describeExplainabilityResponseSchema: Schema<DescribeExplainabilityResponse> =
  s.object<DescribeExplainabilityResponse>(
    {
      explainabilityArn: s.optional(s.string()),
      explainabilityName: s.optional(s.string()),
      resourceArn: s.optional(s.string()),
      explainabilityConfig: s.optional(s.lazy(() => explainabilityConfigSchema)),
      enableVisualization: s.optional(s.boolean()),
      dataSource: s.optional(s.lazy(() => dataSourceSchema)),
      schema: s.optional(s.lazy(() => schemaModelSchema)),
      startDateTime: s.optional(s.string()),
      endDateTime: s.optional(s.string()),
      estimatedTimeRemainingInMinutes: s.optional(s.int()),
      message: s.optional(s.string()),
      status: s.optional(s.string()),
      creationTime: s.optional(s.dateTime()),
      lastModificationTime: s.optional(s.dateTime()),
      _keysMap: {
        explainabilityArn: "ExplainabilityArn",
        explainabilityName: "ExplainabilityName",
        resourceArn: "ResourceArn",
        explainabilityConfig: "ExplainabilityConfig",
        enableVisualization: "EnableVisualization",
        dataSource: "DataSource",
        schema: "Schema",
        startDateTime: "StartDateTime",
        endDateTime: "EndDateTime",
        estimatedTimeRemainingInMinutes: "EstimatedTimeRemainingInMinutes",
        message: "Message",
        status: "Status",
        creationTime: "CreationTime",
        lastModificationTime: "LastModificationTime",
      },
    },
    { additionalProperties: s.json() },
  );
