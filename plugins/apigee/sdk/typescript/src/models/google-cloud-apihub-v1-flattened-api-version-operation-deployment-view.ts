import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1ApiOperation2Schema,
  type GoogleCloudApihubV1ApiOperation2,
} from "./google-cloud-apihub-v1-api-operation2.js";
import {
  googleCloudApihubV1Api1Schema,
  type GoogleCloudApihubV1Api1,
} from "./google-cloud-apihub-v1-api1.js";
import {
  googleCloudApihubV1Deployment2Schema,
  type GoogleCloudApihubV1Deployment2,
} from "./google-cloud-apihub-v1-deployment2.js";
import {
  googleCloudApihubV1Version1Schema,
  type GoogleCloudApihubV1Version1,
} from "./google-cloud-apihub-v1-version1.js";

/**
 * A flattened view of an API, its version, one of its operations and one of the linked deployments.
 * If there are no deployments linked to the operation then the result will be empty.
 */
export type GoogleCloudApihubV1FlattenedApiVersionOperationDeploymentView = {
  /** Optional. The deployment. */
  deployment?: GoogleCloudApihubV1Deployment2;
  /** Optional. The API. */
  api?: GoogleCloudApihubV1Api1;
  /** Optional. The version. */
  version?: GoogleCloudApihubV1Version1;
  /** Optional. The API operation. */
  apiOperation?: GoogleCloudApihubV1ApiOperation2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1FlattenedApiVersionOperationDeploymentViewSchema: Schema<GoogleCloudApihubV1FlattenedApiVersionOperationDeploymentView> =
  s.object<GoogleCloudApihubV1FlattenedApiVersionOperationDeploymentView>(
    {
      deployment: s.optional(s.lazy(() => googleCloudApihubV1Deployment2Schema)),
      api: s.optional(s.lazy(() => googleCloudApihubV1Api1Schema)),
      version: s.optional(s.lazy(() => googleCloudApihubV1Version1Schema)),
      apiOperation: s.optional(s.lazy(() => googleCloudApihubV1ApiOperation2Schema)),
    },
    { additionalProperties: s.json() },
  );
