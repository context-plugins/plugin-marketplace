import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1ApiDocSchema,
  type GoogleCloudApigeeV1ApiDoc,
} from "./google-cloud-apigee-v1-api-doc.js";

export type GoogleCloudApigeeV1ListApiDocsResponse = {
  /** Unique ID of the request. */
  requestId?: string;
  /** Unique error code for the request, if any. */
  errorCode?: string;
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Description of the operation. */
  message?: string;
  /** The catalog item resources. */
  data?: GoogleCloudApigeeV1ApiDoc[];
  /** Status of the operation. */
  status?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListApiDocsResponseSchema: Schema<GoogleCloudApigeeV1ListApiDocsResponse> =
  s.object<GoogleCloudApigeeV1ListApiDocsResponse>(
    {
      requestId: s.optional(s.string()),
      errorCode: s.optional(s.string()),
      nextPageToken: s.optional(s.string()),
      message: s.optional(s.string()),
      data: s.optional(s.array(s.lazy(() => googleCloudApigeeV1ApiDocSchema))),
      status: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
