import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleTypeInterval1ApigeeProjectsApiSchema,
  type GoogleTypeInterval1ApigeeProjectsApi,
} from "./google-type-interval1-apigee-projects-api.js";

/** Request for GenerateSpec. */
export type GoogleCloudApihubV1GenerateSpecRequest = {
  /**
   * Required. The observation window. The server quantizes to day boundaries and caps the span at
   * 90 days.
   */
  observationWindow?: GoogleTypeInterval1ApigeeProjectsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1GenerateSpecRequestSchema: Schema<GoogleCloudApihubV1GenerateSpecRequest> =
  s.object<GoogleCloudApihubV1GenerateSpecRequest>(
    {
      observationWindow: s.optional(s.lazy(() => googleTypeInterval1ApigeeProjectsApiSchema)),
    },
    { additionalProperties: s.json() },
  );
