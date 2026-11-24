import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1DeploymentSchema,
  type GoogleCloudApigeeV1Deployment,
} from "./google-cloud-apigee-v1-deployment.js";

export type GoogleCloudApigeeV1ListDeploymentsResponse = {
  /** List of deployments. */
  deployments?: GoogleCloudApigeeV1Deployment[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListDeploymentsResponseSchema: Schema<GoogleCloudApigeeV1ListDeploymentsResponse> =
  s.object<GoogleCloudApigeeV1ListDeploymentsResponse>(
    {
      deployments: s.optional(s.array(s.lazy(() => googleCloudApigeeV1DeploymentSchema))),
    },
    { additionalProperties: s.json() },
  );
