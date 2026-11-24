import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1HeaderSchema,
  type GoogleCloudApihubV1Header,
} from "./google-cloud-apihub-v1-header.js";

/** Optional. Response metadata. */
export type GoogleCloudApihubV1HttpResponse2 = {
  /** Optional. Map of status code to observed count */
  responseCodes?: Record<string, string>;
  /** Optional. Unordered map from header name to header metadata */
  headers?: Record<string, GoogleCloudApihubV1Header>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1HttpResponse2Schema: Schema<GoogleCloudApihubV1HttpResponse2> =
  s.object<GoogleCloudApihubV1HttpResponse2>(
    {
      responseCodes: s.optional(s.record(s.string(), s.string())),
      headers: s.optional(
        s.record(
          s.string(),
          s.lazy(() => googleCloudApihubV1HeaderSchema),
        ),
      ),
    },
    { additionalProperties: s.json() },
  );
