import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1ApiOperationSchema,
  type GoogleCloudApihubV1ApiOperation,
} from "./google-cloud-apihub-v1-api-operation.js";

/** The ListApiOperations method's response. */
export type GoogleCloudApihubV1ListApiOperationsResponse = {
  /** The operations corresponding to an API version. */
  apiOperations?: GoogleCloudApihubV1ApiOperation[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ListApiOperationsResponseSchema: Schema<GoogleCloudApihubV1ListApiOperationsResponse> =
  s.object<GoogleCloudApihubV1ListApiOperationsResponse>(
    {
      apiOperations: s.optional(s.array(s.lazy(() => googleCloudApihubV1ApiOperationSchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
