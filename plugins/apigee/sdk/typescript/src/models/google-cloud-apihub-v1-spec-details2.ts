import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1OpenApiSpecDetails2Schema,
  type GoogleCloudApihubV1OpenApiSpecDetails2,
} from "./google-cloud-apihub-v1-open-api-spec-details2.js";

/** Output only. Details parsed from the spec. */
export type GoogleCloudApihubV1SpecDetails2 = {
  /**
   * Output only. Additional details apart from `OperationDetails` parsed from an OpenAPI spec. The
   * OperationDetails parsed from the spec can be obtained by using ListAPIOperations method.
   */
  openApiSpecDetails?: GoogleCloudApihubV1OpenApiSpecDetails2;
  /** Output only. The description of the spec. */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1SpecDetails2Schema: Schema<GoogleCloudApihubV1SpecDetails2> =
  s.object<GoogleCloudApihubV1SpecDetails2>(
    {
      openApiSpecDetails: s.optional(s.lazy(() => googleCloudApihubV1OpenApiSpecDetails2Schema)),
      description: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
