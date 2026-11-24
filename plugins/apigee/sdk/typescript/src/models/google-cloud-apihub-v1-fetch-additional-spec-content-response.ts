import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1AdditionalSpecContent1Schema,
  type GoogleCloudApihubV1AdditionalSpecContent1,
} from "./google-cloud-apihub-v1-additional-spec-content1.js";

/** The FetchAdditionalSpecContent method's response. */
export type GoogleCloudApihubV1FetchAdditionalSpecContentResponse = {
  /** The additional spec content. */
  additionalSpecContent?: GoogleCloudApihubV1AdditionalSpecContent1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1FetchAdditionalSpecContentResponseSchema: Schema<GoogleCloudApihubV1FetchAdditionalSpecContentResponse> =
  s.object<GoogleCloudApihubV1FetchAdditionalSpecContentResponse>(
    {
      additionalSpecContent: s.optional(s.lazy(() => googleCloudApihubV1AdditionalSpecContent1Schema)),
    },
    { additionalProperties: s.json() },
  );
