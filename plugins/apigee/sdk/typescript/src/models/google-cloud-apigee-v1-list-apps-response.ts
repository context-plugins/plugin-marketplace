import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { googleCloudApigeeV1AppSchema, type GoogleCloudApigeeV1App } from "./google-cloud-apigee-v1-app.js";

export type GoogleCloudApigeeV1ListAppsResponse = {
  /** Total count of Apps. */
  totalSize?: number;
  app?: GoogleCloudApigeeV1App[];
  /**
   * Token that can be sent as `next_page_token` to retrieve the next page. If this field is
   * omitted, there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListAppsResponseSchema: Schema<GoogleCloudApigeeV1ListAppsResponse> =
  s.object<GoogleCloudApigeeV1ListAppsResponse>(
    {
      totalSize: s.optional(s.int()),
      app: s.optional(s.array(s.lazy(() => googleCloudApigeeV1AppSchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
