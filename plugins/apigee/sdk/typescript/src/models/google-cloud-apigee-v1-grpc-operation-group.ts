import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1GrpcOperationConfigSchema,
  type GoogleCloudApigeeV1GrpcOperationConfig,
} from "./google-cloud-apigee-v1-grpc-operation-config.js";

/** List of gRPC operation configuration details associated with Apigee API proxies. */
export type GoogleCloudApigeeV1GrpcOperationGroup = {
  /**
   * Required. List of operation configurations for either Apigee API proxies that are associated
   * with this API product.
   */
  operationConfigs?: GoogleCloudApigeeV1GrpcOperationConfig[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1GrpcOperationGroupSchema: Schema<GoogleCloudApigeeV1GrpcOperationGroup> =
  s.object<GoogleCloudApigeeV1GrpcOperationGroup>(
    {
      operationConfigs: s.optional(s.array(s.lazy(() => googleCloudApigeeV1GrpcOperationConfigSchema))),
    },
    { additionalProperties: s.json() },
  );
