import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataSourceSchema, type DataSource } from "./data-source.js";
import { explainabilityConfigSchema, type ExplainabilityConfig } from "./explainability-config.js";
import { schemaModelSchema, type SchemaModel } from "./schema-model.js";
import { tagSchema, type Tag } from "./tag.js";

export type CreateExplainabilityRequest = {
  /** A unique name for the Explainability. */
  explainabilityName: string;
  /**
   * The Amazon Resource Name (ARN) of the Predictor or Forecast used to create the Explainability.
   */
  resourceArn: string;
  explainabilityConfig: ExplainabilityConfig;
  dataSource?: DataSource;
  schema?: SchemaModel;
  /**
   * Create an Explainability visualization that is viewable within the Amazon Web Services console.
   */
  enableVisualization?: boolean;
  /**
   * If TimePointGranularity is set to SPECIFIC, define the first point for the Explainability. Use
   * the following timestamp format: yyyy-MM-ddTHH:mm:ss (example: 2015-01-01T20:00:00)
   */
  startDateTime?: string;
  /**
   * If TimePointGranularity is set to SPECIFIC, define the last time point for the Explainability.
   * Use the following timestamp format: yyyy-MM-ddTHH:mm:ss (example: 2015-01-01T20:00:00)
   */
  endDateTime?: string;
  /**
   * Optional metadata to help you categorize and organize your resources. Each tag consists of a
   * key and an optional value, both of which you define. Tag keys and values are case sensitive.
   * The following restrictions apply to tags: For each resource, each tag key must be unique and
   * each tag key must have one value. Maximum number of tags per resource: 50. Maximum key length:
   * 128 Unicode characters in UTF-8. Maximum value length: 256 Unicode characters in UTF-8.
   * Accepted characters: all letters and numbers, spaces representable in UTF-8, and + - = . _ : /
   * \@. If your tagging schema is used across ot
   */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createExplainabilityRequestSchema: Schema<CreateExplainabilityRequest> =
  s.object<CreateExplainabilityRequest>(
    {
      explainabilityName: s.string(),
      resourceArn: s.string(),
      explainabilityConfig: explainabilityConfigSchema,
      dataSource: s.optional(s.lazy(() => dataSourceSchema)),
      schema: s.optional(s.lazy(() => schemaModelSchema)),
      enableVisualization: s.optional(s.boolean()),
      startDateTime: s.optional(s.string()),
      endDateTime: s.optional(s.string()),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      _keysMap: {
        explainabilityName: "ExplainabilityName",
        resourceArn: "ResourceArn",
        explainabilityConfig: "ExplainabilityConfig",
        dataSource: "DataSource",
        schema: "Schema",
        enableVisualization: "EnableVisualization",
        startDateTime: "StartDateTime",
        endDateTime: "EndDateTime",
        tags: "Tags",
      },
    },
    { additionalProperties: s.json() },
  );
