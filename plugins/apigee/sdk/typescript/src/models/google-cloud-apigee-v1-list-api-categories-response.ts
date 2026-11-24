import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1ApiCategorySchema,
  type GoogleCloudApigeeV1ApiCategory,
} from "./google-cloud-apigee-v1-api-category.js";

/** The response for `ListApiCategoriesRequest`. Next ID: 6 */
export type GoogleCloudApigeeV1ListApiCategoriesResponse = {
  /** Unique ID of the request. */
  requestId?: string;
  /** Unique error code for the request, if any. */
  errorCode?: string;
  /** Description of the operation. */
  message?: string;
  /** Status of the operation. */
  status?: string;
  /** The API category resources. */
  data?: GoogleCloudApigeeV1ApiCategory[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListApiCategoriesResponseSchema: Schema<GoogleCloudApigeeV1ListApiCategoriesResponse> =
  s.object<GoogleCloudApigeeV1ListApiCategoriesResponse>(
    {
      requestId: s.optional(s.string()),
      errorCode: s.optional(s.string()),
      message: s.optional(s.string()),
      status: s.optional(s.string()),
      data: s.optional(s.array(s.lazy(() => googleCloudApigeeV1ApiCategorySchema))),
    },
    { additionalProperties: s.json() },
  );
