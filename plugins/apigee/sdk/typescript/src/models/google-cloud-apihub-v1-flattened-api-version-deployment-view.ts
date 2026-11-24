import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
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

/** A flattened view of an API, its version and one of the linked deployments. */
export type GoogleCloudApihubV1FlattenedApiVersionDeploymentView = {
  /** Optional. The version. */
  version?: GoogleCloudApihubV1Version1;
  /** Optional. The API. */
  api?: GoogleCloudApihubV1Api1;
  /** Optional. The deployment. */
  deployment?: GoogleCloudApihubV1Deployment2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1FlattenedApiVersionDeploymentViewSchema: Schema<GoogleCloudApihubV1FlattenedApiVersionDeploymentView> =
  s.object<GoogleCloudApihubV1FlattenedApiVersionDeploymentView>(
    {
      version: s.optional(s.lazy(() => googleCloudApihubV1Version1Schema)),
      api: s.optional(s.lazy(() => googleCloudApihubV1Api1Schema)),
      deployment: s.optional(s.lazy(() => googleCloudApihubV1Deployment2Schema)),
    },
    { additionalProperties: s.json() },
  );
