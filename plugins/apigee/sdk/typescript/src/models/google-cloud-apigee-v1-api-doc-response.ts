import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1ApiDoc2Schema,
  type GoogleCloudApigeeV1ApiDoc2,
} from "./google-cloud-apigee-v1-api-doc2.js";

/** The catalog item resource wrapped with response status, error_code, etc. */
export type GoogleCloudApigeeV1ApiDocResponse = {
  /** The catalog item resource. */
  data?: GoogleCloudApigeeV1ApiDoc2;
  /** Status of the operation. */
  status?: string;
  /** Description of the operation. */
  message?: string;
  /** Unique ID of the request. */
  requestId?: string;
  /** Unique error code for the request, if any. */
  errorCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ApiDocResponseSchema: Schema<GoogleCloudApigeeV1ApiDocResponse> =
  s.object<GoogleCloudApigeeV1ApiDocResponse>(
    {
      data: s.optional(s.lazy(() => googleCloudApigeeV1ApiDoc2Schema)),
      status: s.optional(s.string()),
      message: s.optional(s.string()),
      requestId: s.optional(s.string()),
      errorCode: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
