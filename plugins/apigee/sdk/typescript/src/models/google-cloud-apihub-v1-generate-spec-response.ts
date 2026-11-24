import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1SpecContents2Schema,
  type GoogleCloudApihubV1SpecContents2,
} from "./google-cloud-apihub-v1-spec-contents2.js";

/** Response for GenerateSpec. */
export type GoogleCloudApihubV1GenerateSpecResponse = {
  /** The merged OpenAPI document for the requested window. */
  generatedSpec?: GoogleCloudApihubV1SpecContents2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1GenerateSpecResponseSchema: Schema<GoogleCloudApihubV1GenerateSpecResponse> =
  s.object<GoogleCloudApihubV1GenerateSpecResponse>(
    {
      generatedSpec: s.optional(s.lazy(() => googleCloudApihubV1SpecContents2Schema)),
    },
    { additionalProperties: s.json() },
  );
