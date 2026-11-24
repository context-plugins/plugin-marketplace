import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1AttributeSchema,
  type GoogleCloudApigeeV1Attribute,
} from "./google-cloud-apigee-v1-attribute.js";
import {
  googleCloudApigeeV1OperationSchema,
  type GoogleCloudApigeeV1Operation,
} from "./google-cloud-apigee-v1-operation.js";
import {
  googleCloudApigeeV1Quota1Schema,
  type GoogleCloudApigeeV1Quota1,
} from "./google-cloud-apigee-v1-quota1.js";

/**
 * Binds the resources in an API proxy or remote service with the allowed REST methods and
 * associated quota enforcement.
 */
export type GoogleCloudApigeeV1OperationConfig = {
  /**
   * List of resource/method pairs for the API proxy or remote service to which quota will applied.
   * **Note**: Currently, you can specify only a single resource/method pair. The call will fail if
   * more than one resource/method pair is provided.
   */
  operations?: GoogleCloudApigeeV1Operation[];
  /**
   * Quota parameters to be enforced for the resources, methods, and API source combination. If none
   * are specified, quota enforcement will not be done.
   */
  quota?: GoogleCloudApigeeV1Quota1;
  /** Custom attributes associated with the operation. */
  attributes?: GoogleCloudApigeeV1Attribute[];
  /**
   * Required. Name of the API proxy or remote service with which the resources, methods, and quota
   * are associated.
   */
  apiSource?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1OperationConfigSchema: Schema<GoogleCloudApigeeV1OperationConfig> =
  s.object<GoogleCloudApigeeV1OperationConfig>(
    {
      operations: s.optional(s.array(s.lazy(() => googleCloudApigeeV1OperationSchema))),
      quota: s.optional(s.lazy(() => googleCloudApigeeV1Quota1Schema)),
      attributes: s.optional(s.array(s.lazy(() => googleCloudApigeeV1AttributeSchema))),
      apiSource: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
