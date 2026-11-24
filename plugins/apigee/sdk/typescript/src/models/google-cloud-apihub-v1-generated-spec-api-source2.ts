import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type1ApigeeProjectsApiSchema, type Type1ApigeeProjectsApi } from "./type1-apigee-projects-api.js";

/** Output only. Where the pipeline observed this API. */
export type GoogleCloudApihubV1GeneratedSpecApiSource2 = {
  /** Output only. Server-supplied label (e.g. "Apigee X"). */
  typeDisplayName?: string;
  /** Output only. Per-source instance label (e.g. "/" for Apigee X). */
  sourceDisplayName?: string;
  /** Output only. The source type. */
  type?: Type1ApigeeProjectsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1GeneratedSpecApiSource2Schema: Schema<GoogleCloudApihubV1GeneratedSpecApiSource2> =
  s.object<GoogleCloudApihubV1GeneratedSpecApiSource2>(
    {
      typeDisplayName: s.optional(s.string()),
      sourceDisplayName: s.optional(s.string()),
      type: s.optional(s.lazy(() => type1ApigeeProjectsApiSchema)),
    },
    { additionalProperties: s.json() },
  );
