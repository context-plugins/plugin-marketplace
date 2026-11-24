import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1GrpcOperationConfigSchema,
  type GoogleCloudApigeeV1GrpcOperationConfig,
} from "./google-cloud-apigee-v1-grpc-operation-config.js";

/**
 * Optional. Configuration used to group Apigee proxies with gRPC services and method names. This
 * grouping allows us to set quota for a particular proxy with the gRPC service name and method. If
 * a method name is not set, this implies quota and authorization are applied to all gRPC methods
 * implemented by that proxy for that particular gRPC service.
 */
export type GoogleCloudApigeeV1GrpcOperationGroup2 = {
  /**
   * Required. List of operation configurations for either Apigee API proxies that are associated
   * with this API product.
   */
  operationConfigs?: GoogleCloudApigeeV1GrpcOperationConfig[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1GrpcOperationGroup2Schema: Schema<GoogleCloudApigeeV1GrpcOperationGroup2> =
  s.object<GoogleCloudApigeeV1GrpcOperationGroup2>(
    {
      operationConfigs: s.optional(s.array(s.lazy(() => googleCloudApigeeV1GrpcOperationConfigSchema))),
    },
    { additionalProperties: s.json() },
  );
