import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { appSyncRuntimeSchema, type AppSyncRuntime } from "./app-sync-runtime.js";
import { syncConfigSchema, type SyncConfig } from "./sync-config.js";

export type FunctionConfiguration = {
  /** A unique ID representing the Function object. */
  functionId?: string;
  /** The Amazon Resource Name (ARN) of the Function object. */
  functionArn?: string;
  /** The name of the Function object. */
  name?: string;
  /** The Function description. */
  description?: string;
  /** The name of the DataSource. */
  dataSourceName?: string;
  /**
   * The Function request mapping template. Functions support only the 2018-05-29 version of the
   * request mapping template.
   */
  requestMappingTemplate?: string;
  /** The Function response mapping template. */
  responseMappingTemplate?: string;
  /**
   * The version of the request mapping template. Currently, only the 2018-05-29 version of the
   * template is supported.
   */
  functionVersion?: string;
  syncConfig?: SyncConfig;
  /** The maximum batching size for a resolver. */
  maxBatchSize?: number;
  runtime?: AppSyncRuntime;
  /**
   * The function code that contains the request and response functions. When code is used, the
   * runtime is required. The runtime value must be APPSYNC_JS.
   */
  code?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const functionConfigurationSchema: Schema<FunctionConfiguration> = s.object<FunctionConfiguration>(
  {
    functionId: s.optional(s.string()),
    functionArn: s.optional(s.string()),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    dataSourceName: s.optional(s.string()),
    requestMappingTemplate: s.optional(s.string()),
    responseMappingTemplate: s.optional(s.string()),
    functionVersion: s.optional(s.string()),
    syncConfig: s.optional(s.lazy(() => syncConfigSchema)),
    maxBatchSize: s.optional(s.int()),
    runtime: s.optional(s.lazy(() => appSyncRuntimeSchema)),
    code: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
