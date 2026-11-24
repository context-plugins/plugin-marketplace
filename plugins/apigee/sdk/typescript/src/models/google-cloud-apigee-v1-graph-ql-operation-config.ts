import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1AttributeSchema,
  type GoogleCloudApigeeV1Attribute,
} from "./google-cloud-apigee-v1-attribute.js";
import {
  googleCloudApigeeV1GraphQlOperationSchema,
  type GoogleCloudApigeeV1GraphQlOperation,
} from "./google-cloud-apigee-v1-graph-ql-operation.js";
import {
  googleCloudApigeeV1Quota1Schema,
  type GoogleCloudApigeeV1Quota1,
} from "./google-cloud-apigee-v1-quota1.js";

/**
 * Binds the resources in a proxy or remote service with the GraphQL operation and its associated
 * quota enforcement.
 */
export type GoogleCloudApigeeV1GraphQlOperationConfig = {
  /**
   * Quota parameters to be enforced for the resources, methods, and API source combination. If none
   * are specified, quota enforcement will not be done.
   */
  quota?: GoogleCloudApigeeV1Quota1;
  /**
   * Required. List of GraphQL name/operation type pairs for the proxy or remote service to which
   * quota will be applied. If only operation types are specified, the quota will be applied to all
   * GraphQL requests irrespective of the GraphQL name. **Note**: Currently, you can specify only a
   * single GraphQLOperation. Specifying more than one will cause the operation to fail.
   */
  operations?: GoogleCloudApigeeV1GraphQlOperation[];
  /** Custom attributes associated with the operation. */
  attributes?: GoogleCloudApigeeV1Attribute[];
  /**
   * Required. Name of the API proxy endpoint or remote service with which the GraphQL operation and
   * quota are associated.
   */
  apiSource?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1GraphQlOperationConfigSchema: Schema<GoogleCloudApigeeV1GraphQlOperationConfig> =
  s.object<GoogleCloudApigeeV1GraphQlOperationConfig>(
    {
      quota: s.optional(s.lazy(() => googleCloudApigeeV1Quota1Schema)),
      operations: s.optional(s.array(s.lazy(() => googleCloudApigeeV1GraphQlOperationSchema))),
      attributes: s.optional(s.array(s.lazy(() => googleCloudApigeeV1AttributeSchema))),
      apiSource: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
