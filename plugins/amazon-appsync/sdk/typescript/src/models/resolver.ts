import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { appSyncRuntimeSchema, type AppSyncRuntime } from "./app-sync-runtime.js";
import { cachingConfigSchema, type CachingConfig } from "./caching-config.js";
import { kindSchema, type Kind } from "./kind.js";
import {
  metricsConfigAwsAppSyncResolversApiSchema,
  type MetricsConfigAwsAppSyncResolversApi,
} from "./metrics-config-aws-app-sync-resolvers-api.js";
import { pipelineConfigSchema, type PipelineConfig } from "./pipeline-config.js";
import { syncConfigSchema, type SyncConfig } from "./sync-config.js";

export type Resolver = {
  /** The resolver type name. */
  typeName?: string;
  /** The resolver field name. */
  fieldName?: string;
  /** The resolver data source name. */
  dataSourceName?: string;
  /** The resolver Amazon Resource Name (ARN). */
  resolverArn?: string;
  /** The request mapping template. */
  requestMappingTemplate?: string;
  /** The response mapping template. */
  responseMappingTemplate?: string;
  /**
   * The resolver type. UNIT: A UNIT resolver type. A UNIT resolver is the default resolver type.
   * You can use a UNIT resolver to run a GraphQL query against a single data source. PIPELINE: A
   * PIPELINE resolver type. You can use a PIPELINE resolver to invoke a series of Function objects
   * in a serial manner. You can use a pipeline resolver to run a GraphQL query against multiple
   * data sources.
   */
  kind?: Kind;
  pipelineConfig?: PipelineConfig;
  syncConfig?: SyncConfig;
  cachingConfig?: CachingConfig;
  /** The maximum batching size for a resolver. */
  maxBatchSize?: number;
  runtime?: AppSyncRuntime;
  /**
   * The resolver code that contains the request and response functions. When code is used, the
   * runtime is required. The runtime value must be APPSYNC_JS.
   */
  code?: string;
  /**
   * Enables or disables enhanced resolver metrics for specified resolvers. Note that metricsConfig
   * won't be used unless the resolverLevelMetricsBehavior value is set to PER_RESOLVER_METRICS. If
   * the resolverLevelMetricsBehavior is set to FULL_REQUEST_RESOLVER_METRICS instead, metricsConfig
   * will be ignored. However, you can still set its value. metricsConfig can be ENABLED or
   * DISABLED.
   */
  metricsConfig?: MetricsConfigAwsAppSyncResolversApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resolverSchema: Schema<Resolver> = s.object<Resolver>(
  {
    typeName: s.optional(s.string()),
    fieldName: s.optional(s.string()),
    dataSourceName: s.optional(s.string()),
    resolverArn: s.optional(s.string()),
    requestMappingTemplate: s.optional(s.string()),
    responseMappingTemplate: s.optional(s.string()),
    kind: s.optional(s.lazy(() => kindSchema)),
    pipelineConfig: s.optional(s.lazy(() => pipelineConfigSchema)),
    syncConfig: s.optional(s.lazy(() => syncConfigSchema)),
    cachingConfig: s.optional(s.lazy(() => cachingConfigSchema)),
    maxBatchSize: s.optional(s.int()),
    runtime: s.optional(s.lazy(() => appSyncRuntimeSchema)),
    code: s.optional(s.string()),
    metricsConfig: s.optional(s.lazy(() => metricsConfigAwsAppSyncResolversApiSchema)),
  },
  { additionalProperties: s.json() },
);
