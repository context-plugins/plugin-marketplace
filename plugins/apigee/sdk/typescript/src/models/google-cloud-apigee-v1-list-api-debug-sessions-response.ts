import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1ApiDebugSessionSchema,
  type GoogleCloudApigeeV1ApiDebugSession,
} from "./google-cloud-apigee-v1-api-debug-session.js";

/** Response for ListApiDebugSessions. */
export type GoogleCloudApigeeV1ListApiDebugSessionsResponse = {
  /**
   * Page token that you can include in a ListApiDebugSessionsRequest to retrieve the next page. If
   * omitted, no subsequent pages exist.
   */
  nextPageToken?: string;
  /**
   * Session info that includes debug session ID, environment ID, api proxy revision ID and the
   * first transaction creation timestamp.
   */
  sessions?: GoogleCloudApigeeV1ApiDebugSession[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListApiDebugSessionsResponseSchema: Schema<GoogleCloudApigeeV1ListApiDebugSessionsResponse> =
  s.object<GoogleCloudApigeeV1ListApiDebugSessionsResponse>(
    {
      nextPageToken: s.optional(s.string()),
      sessions: s.optional(s.array(s.lazy(() => googleCloudApigeeV1ApiDebugSessionSchema))),
    },
    { additionalProperties: s.json() },
  );
