import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  bedrockKnowledgeStoreConfigurationSchema,
  type BedrockKnowledgeStoreConfiguration,
} from "./bedrock-knowledge-store-configuration.js";
import { opensearchConfigurationSchema, type OpensearchConfiguration } from "./opensearch-configuration.js";
import { qnAKendraConfigurationSchema, type QnAKendraConfiguration } from "./qn-akendra-configuration.js";

export type DataSourceConfiguration = {
  opensearchConfiguration?: OpensearchConfiguration;
  kendraConfiguration?: QnAKendraConfiguration;
  bedrockKnowledgeStoreConfiguration?: BedrockKnowledgeStoreConfiguration;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataSourceConfigurationSchema: Schema<DataSourceConfiguration> =
  s.object<DataSourceConfiguration>(
    {
      opensearchConfiguration: s.optional(s.lazy(() => opensearchConfigurationSchema)),
      kendraConfiguration: s.optional(s.lazy(() => qnAKendraConfigurationSchema)),
      bedrockKnowledgeStoreConfiguration: s.optional(s.lazy(() => bedrockKnowledgeStoreConfigurationSchema)),
    },
    { additionalProperties: s.json() },
  );
