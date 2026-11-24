import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1DeploymentSchema,
  type GoogleCloudApihubV1Deployment,
} from "./google-cloud-apihub-v1-deployment.js";

/** The ListDeployments method's response. */
export type GoogleCloudApihubV1ListDeploymentsResponse = {
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** The deployment resources present in the API hub. */
  deployments?: GoogleCloudApihubV1Deployment[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ListDeploymentsResponseSchema: Schema<GoogleCloudApihubV1ListDeploymentsResponse> =
  s.object<GoogleCloudApihubV1ListDeploymentsResponse>(
    {
      nextPageToken: s.optional(s.string()),
      deployments: s.optional(s.array(s.lazy(() => googleCloudApihubV1DeploymentSchema))),
    },
    { additionalProperties: s.json() },
  );
