import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1AttributeSchema,
  type GoogleCloudApigeeV1Attribute,
} from "./google-cloud-apigee-v1-attribute.js";
import {
  googleCloudApigeeV1Quota3Schema,
  type GoogleCloudApigeeV1Quota3,
} from "./google-cloud-apigee-v1-quota3.js";

/**
 * Binds the resources in a proxy or remote service with the gRPC operation and its associated quota
 * enforcement.
 */
export type GoogleCloudApigeeV1GrpcOperationConfig = {
  /**
   * List of unqualified gRPC method names for the proxy to which quota will be applied. If this
   * field is empty, the Quota will apply to all operations on the gRPC service defined on the
   * proxy. Example: Given a proxy that is configured to serve com.petstore.PetService, the methods
   * com.petstore.PetService.ListPets and com.petstore.PetService.GetPet would be specified here as
   * simply ["ListPets", "GetPet"].
   */
  methods?: string[];
  /**
   * Quota parameters to be enforced for the methods and API source combination. If none are
   * specified, quota enforcement will not be done.
   */
  quota?: GoogleCloudApigeeV1Quota3;
  /** Custom attributes associated with the operation. */
  attributes?: GoogleCloudApigeeV1Attribute[];
  /** Required. Name of the API proxy with which the gRPC operation and quota are associated. */
  apiSource?: string;
  /**
   * Required. gRPC Service name associated to be associated with the API proxy, on which quota
   * rules can be applied upon.
   */
  service?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1GrpcOperationConfigSchema: Schema<GoogleCloudApigeeV1GrpcOperationConfig> =
  s.object<GoogleCloudApigeeV1GrpcOperationConfig>(
    {
      methods: s.optional(s.array(s.string())),
      quota: s.optional(s.lazy(() => googleCloudApigeeV1Quota3Schema)),
      attributes: s.optional(s.array(s.lazy(() => googleCloudApigeeV1AttributeSchema))),
      apiSource: s.optional(s.string()),
      service: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
