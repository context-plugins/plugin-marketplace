import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1ApiDocDocumentation1Schema,
  type GoogleCloudApigeeV1ApiDocDocumentation1,
} from "./google-cloud-apigee-v1-api-doc-documentation1.js";

/** The catalog item documentation wrapped with response status, error_code, etc. */
export type GoogleCloudApigeeV1ApiDocDocumentationResponse = {
  /** Output only. Unique error code for the request, if any. */
  errorCode?: string;
  /** Output only. The documentation resource. */
  data?: GoogleCloudApigeeV1ApiDocDocumentation1;
  /** Output only. Status of the operation. */
  status?: string;
  /** Output only. Unique ID of the request. */
  requestId?: string;
  /** Output only. Description of the operation. */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ApiDocDocumentationResponseSchema: Schema<GoogleCloudApigeeV1ApiDocDocumentationResponse> =
  s.object<GoogleCloudApigeeV1ApiDocDocumentationResponse>(
    {
      errorCode: s.optional(s.string()),
      data: s.optional(s.lazy(() => googleCloudApigeeV1ApiDocDocumentation1Schema)),
      status: s.optional(s.string()),
      requestId: s.optional(s.string()),
      message: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
