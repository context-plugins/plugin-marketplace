import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { appSyncRuntimeSchema, type AppSyncRuntime } from "./app-sync-runtime.js";
import { syncConfigSchema, type SyncConfig } from "./sync-config.js";

export type V1ApisFunctionsRequest1 = {
  /** The Function name. */
  name: string;
  /** The Function description. */
  description?: string;
  /** The Function DataSource name. */
  dataSourceName: string;
  /**
   * The Function request mapping template. Functions support only the 2018-05-29 version of the
   * request mapping template.
   */
  requestMappingTemplate?: string;
  /** The Function request mapping template. */
  responseMappingTemplate?: string;
  /**
   * The version of the request mapping template. Currently, the supported value is 2018-05-29. Note
   * that when using VTL and mapping templates, the functionVersion is required.
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

export const v1ApisFunctionsRequest1Schema: Schema<V1ApisFunctionsRequest1> =
  s.object<V1ApisFunctionsRequest1>(
    {
      name: s.string(),
      description: s.optional(s.string()),
      dataSourceName: s.string(),
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
