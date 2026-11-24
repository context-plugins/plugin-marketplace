import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1SessionSchema,
  type GoogleCloudApigeeV1Session,
} from "./google-cloud-apigee-v1-session.js";

export type GoogleCloudApigeeV1ListDebugSessionsResponse = {
  /**
   * Page token that you can include in a ListDebugSessionsRequest to retrieve the next page. If
   * omitted, no subsequent pages exist.
   */
  nextPageToken?: string;
  /** Session info that includes debug session ID and the first transaction creation timestamp. */
  sessions?: GoogleCloudApigeeV1Session[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListDebugSessionsResponseSchema: Schema<GoogleCloudApigeeV1ListDebugSessionsResponse> =
  s.object<GoogleCloudApigeeV1ListDebugSessionsResponse>(
    {
      nextPageToken: s.optional(s.string()),
      sessions: s.optional(s.array(s.lazy(() => googleCloudApigeeV1SessionSchema))),
    },
    { additionalProperties: s.json() },
  );
