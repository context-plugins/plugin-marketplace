import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1HeaderSchema,
  type GoogleCloudApihubV1Header,
} from "./google-cloud-apihub-v1-header.js";

/** Optional. Request metadata. */
export type GoogleCloudApihubV1HttpRequest2 = {
  /** Optional. Unordered map from header name to header metadata */
  headers?: Record<string, GoogleCloudApihubV1Header>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1HttpRequest2Schema: Schema<GoogleCloudApihubV1HttpRequest2> =
  s.object<GoogleCloudApihubV1HttpRequest2>(
    {
      headers: s.optional(
        s.record(
          s.string(),
          s.lazy(() => googleCloudApihubV1HeaderSchema),
        ),
      ),
    },
    { additionalProperties: s.json() },
  );
