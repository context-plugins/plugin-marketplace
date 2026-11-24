import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { formatApigeeProjectsApiSchema, type FormatApigeeProjectsApi } from "./format-apigee-projects-api.js";
import {
  googleCloudApihubV1Owner1Schema,
  type GoogleCloudApihubV1Owner1,
} from "./google-cloud-apihub-v1-owner1.js";

/**
 * OpenApiSpecDetails contains the details parsed from an OpenAPI spec in addition to the fields
 * mentioned in SpecDetails.
 */
export type GoogleCloudApihubV1OpenApiSpecDetails = {
  /** Output only. Owner details for the spec. This maps to `info.contact` in OpenAPI spec. */
  owner?: GoogleCloudApihubV1Owner1;
  /** Output only. The version in the spec. This maps to `info.version` in OpenAPI spec. */
  version?: string;
  /** Output only. The format of the spec. */
  format?: FormatApigeeProjectsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1OpenApiSpecDetailsSchema: Schema<GoogleCloudApihubV1OpenApiSpecDetails> =
  s.object<GoogleCloudApihubV1OpenApiSpecDetails>(
    {
      owner: s.optional(s.lazy(() => googleCloudApihubV1Owner1Schema)),
      version: s.optional(s.string()),
      format: s.optional(s.lazy(() => formatApigeeProjectsApiSchema)),
    },
    { additionalProperties: s.json() },
  );
