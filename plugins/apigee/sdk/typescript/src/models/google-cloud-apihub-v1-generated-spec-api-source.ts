import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type1ApigeeProjectsApiSchema, type Type1ApigeeProjectsApi } from "./type1-apigee-projects-api.js";

/** User-facing collapse of the source-side identity tuple. */
export type GoogleCloudApihubV1GeneratedSpecApiSource = {
  /** Output only. Server-supplied label (e.g. "Apigee X"). */
  typeDisplayName?: string;
  /** Output only. Per-source instance label (e.g. "/" for Apigee X). */
  sourceDisplayName?: string;
  /** Output only. The source type. */
  type?: Type1ApigeeProjectsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1GeneratedSpecApiSourceSchema: Schema<GoogleCloudApihubV1GeneratedSpecApiSource> =
  s.object<GoogleCloudApihubV1GeneratedSpecApiSource>(
    {
      typeDisplayName: s.optional(s.string()),
      sourceDisplayName: s.optional(s.string()),
      type: s.optional(s.lazy(() => type1ApigeeProjectsApiSchema)),
    },
    { additionalProperties: s.json() },
  );
