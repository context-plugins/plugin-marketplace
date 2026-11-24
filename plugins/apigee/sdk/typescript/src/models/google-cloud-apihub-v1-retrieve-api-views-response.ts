import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1ApiViewSchema,
  type GoogleCloudApihubV1ApiView,
} from "./google-cloud-apihub-v1-api-view.js";

/** The RetrieveApiViews method's response. */
export type GoogleCloudApihubV1RetrieveApiViewsResponse = {
  /** Next page token. */
  nextPageToken?: string;
  /** Output only. The list of API views. */
  apiViews?: GoogleCloudApihubV1ApiView[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1RetrieveApiViewsResponseSchema: Schema<GoogleCloudApihubV1RetrieveApiViewsResponse> =
  s.object<GoogleCloudApihubV1RetrieveApiViewsResponse>(
    {
      nextPageToken: s.optional(s.string()),
      apiViews: s.optional(s.array(s.lazy(() => googleCloudApihubV1ApiViewSchema))),
    },
    { additionalProperties: s.json() },
  );
