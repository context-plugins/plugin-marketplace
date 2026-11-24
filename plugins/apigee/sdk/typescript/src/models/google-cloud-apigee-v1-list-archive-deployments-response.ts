import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1ArchiveDeploymentSchema,
  type GoogleCloudApigeeV1ArchiveDeployment,
} from "./google-cloud-apigee-v1-archive-deployment.js";

/** Response for ListArchiveDeployments method. */
export type GoogleCloudApigeeV1ListArchiveDeploymentsResponse = {
  /** Archive Deployments in the specified environment. */
  archiveDeployments?: GoogleCloudApigeeV1ArchiveDeployment[];
  /**
   * Page token that you can include in a ListArchiveDeployments request to retrieve the next page.
   * If omitted, no subsequent pages exist.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListArchiveDeploymentsResponseSchema: Schema<GoogleCloudApigeeV1ListArchiveDeploymentsResponse> =
  s.object<GoogleCloudApigeeV1ListArchiveDeploymentsResponse>(
    {
      archiveDeployments: s.optional(s.array(s.lazy(() => googleCloudApigeeV1ArchiveDeploymentSchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
