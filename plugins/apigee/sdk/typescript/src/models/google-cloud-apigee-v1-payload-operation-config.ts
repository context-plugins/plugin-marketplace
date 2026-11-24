import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1AttributeSchema,
  type GoogleCloudApigeeV1Attribute,
} from "./google-cloud-apigee-v1-attribute.js";
import {
  googleCloudApigeeV1PayloadOperationSchema,
  type GoogleCloudApigeeV1PayloadOperation,
} from "./google-cloud-apigee-v1-payload-operation.js";
import {
  googleCloudApigeeV1Quota2Schema,
  type GoogleCloudApigeeV1Quota2,
} from "./google-cloud-apigee-v1-quota2.js";

/** Binds the payload operations in an API proxy with the associated quota enforcement. */
export type GoogleCloudApigeeV1PayloadOperationConfig = {
  /** Required. Name of the API proxy with which the payload operations and quota are associated. */
  apiSource?: string;
  /** Optional. Custom attributes associated with the operation. */
  attributes?: GoogleCloudApigeeV1Attribute[];
  /**
   * Optional. Quota parameters to be enforced for the operations and API source combination. If
   * none are specified, quota enforcement will not be done unless a quota is defined at the API
   * product level.
   */
  quota?: GoogleCloudApigeeV1Quota2;
  /** Required. List of payload operations for the API proxy to which quota will be applied. */
  operations?: GoogleCloudApigeeV1PayloadOperation[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1PayloadOperationConfigSchema: Schema<GoogleCloudApigeeV1PayloadOperationConfig> =
  s.object<GoogleCloudApigeeV1PayloadOperationConfig>(
    {
      apiSource: s.optional(s.string()),
      attributes: s.optional(s.array(s.lazy(() => googleCloudApigeeV1AttributeSchema))),
      quota: s.optional(s.lazy(() => googleCloudApigeeV1Quota2Schema)),
      operations: s.optional(s.array(s.lazy(() => googleCloudApigeeV1PayloadOperationSchema))),
    },
    { additionalProperties: s.json() },
  );
