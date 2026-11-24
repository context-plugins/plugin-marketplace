import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1PayloadOperationConfigSchema,
  type GoogleCloudApigeeV1PayloadOperationConfig,
} from "./google-cloud-apigee-v1-payload-operation-config.js";

/**
 * Optional. Configuration used to group Apigee proxies with payload-based operations and quotas.
 * Unlike `operation_group`, which matches on the URL path, this grouping matches on operation
 * identifiers extracted from the request payload (for example, JSON-RPC method and tool names).
 * This enables fine-grained authorization and quota enforcement for protocols such as MCP where
 * multiple operations share a single endpoint. **Note:** The `proxies` and `api_resources` settings
 * cannot be specified for both the API product and payload operation group; otherwise the call will
 * fail.
 */
export type GoogleCloudApigeeV1PayloadOperationGroup2 = {
  /**
   * Required. List of payload operation configurations for Apigee API proxies that are associated
   * with this API product.
   */
  operationConfigs?: GoogleCloudApigeeV1PayloadOperationConfig[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1PayloadOperationGroup2Schema: Schema<GoogleCloudApigeeV1PayloadOperationGroup2> =
  s.object<GoogleCloudApigeeV1PayloadOperationGroup2>(
    {
      operationConfigs: s.optional(s.array(s.lazy(() => googleCloudApigeeV1PayloadOperationConfigSchema))),
    },
    { additionalProperties: s.json() },
  );
