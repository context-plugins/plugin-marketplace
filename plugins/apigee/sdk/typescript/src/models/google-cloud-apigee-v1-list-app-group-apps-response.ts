import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1AppGroupAppSchema,
  type GoogleCloudApigeeV1AppGroupApp,
} from "./google-cloud-apigee-v1-app-group-app.js";

/** Response for ListAppGroupApps */
export type GoogleCloudApigeeV1ListAppGroupAppsResponse = {
  /**
   * Token that can be sent as `next_page_token` to retrieve the next page. If this field is
   * omitted, there are no subsequent pages.
   */
  nextPageToken?: string;
  /** List of AppGroup apps and their credentials. */
  appGroupApps?: GoogleCloudApigeeV1AppGroupApp[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListAppGroupAppsResponseSchema: Schema<GoogleCloudApigeeV1ListAppGroupAppsResponse> =
  s.object<GoogleCloudApigeeV1ListAppGroupAppsResponse>(
    {
      nextPageToken: s.optional(s.string()),
      appGroupApps: s.optional(s.array(s.lazy(() => googleCloudApigeeV1AppGroupAppSchema))),
    },
    { additionalProperties: s.json() },
  );
