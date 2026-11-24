import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1PayloadOperationConfigSchema,
  type GoogleCloudApigeeV1PayloadOperationConfig,
} from "./google-cloud-apigee-v1-payload-operation-config.js";

/**
 * List of payload operation configuration details associated with Apigee API proxies. Payload
 * operations enable governance of protocols where operations are embedded in the request body (such
 * as JSON-RPC) rather than defined by the URL path.
 */
export type GoogleCloudApigeeV1PayloadOperationGroup = {
  /**
   * Required. List of payload operation configurations for Apigee API proxies that are associated
   * with this API product.
   */
  operationConfigs?: GoogleCloudApigeeV1PayloadOperationConfig[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1PayloadOperationGroupSchema: Schema<GoogleCloudApigeeV1PayloadOperationGroup> =
  s.object<GoogleCloudApigeeV1PayloadOperationGroup>(
    {
      operationConfigs: s.optional(s.array(s.lazy(() => googleCloudApigeeV1PayloadOperationConfigSchema))),
    },
    { additionalProperties: s.json() },
  );
