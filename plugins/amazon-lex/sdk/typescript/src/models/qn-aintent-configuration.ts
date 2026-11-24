import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  bedrockModelSpecificationSchema,
  type BedrockModelSpecification,
} from "./bedrock-model-specification.js";
import { dataSourceConfigurationSchema, type DataSourceConfiguration } from "./data-source-configuration.js";

export type QnAIntentConfiguration = {
  dataSourceConfiguration?: DataSourceConfiguration;
  bedrockModelConfiguration?: BedrockModelSpecification;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const qnAIntentConfigurationSchema: Schema<QnAIntentConfiguration> = s.object<QnAIntentConfiguration>(
  {
    dataSourceConfiguration: s.optional(s.lazy(() => dataSourceConfigurationSchema)),
    bedrockModelConfiguration: s.optional(s.lazy(() => bedrockModelSpecificationSchema)),
  },
  { additionalProperties: s.json() },
);
