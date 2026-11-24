import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1ApiCategory1Schema,
  type GoogleCloudApigeeV1ApiCategory1,
} from "./google-cloud-apigee-v1-api-category1.js";

/** The API category resource wrapped with response status, error_code, etc. */
export type GoogleCloudApigeeV1ApiCategoryResponse = {
  /** Unique ID of the request. */
  requestId?: string;
  /** The API category resource. */
  data?: GoogleCloudApigeeV1ApiCategory1;
  /** Description of the operation. */
  message?: string;
  /** Unique error code for the request, if any. */
  errorCode?: string;
  /** Status of the operation. */
  status?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ApiCategoryResponseSchema: Schema<GoogleCloudApigeeV1ApiCategoryResponse> =
  s.object<GoogleCloudApigeeV1ApiCategoryResponse>(
    {
      requestId: s.optional(s.string()),
      data: s.optional(s.lazy(() => googleCloudApigeeV1ApiCategory1Schema)),
      message: s.optional(s.string()),
      errorCode: s.optional(s.string()),
      status: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
