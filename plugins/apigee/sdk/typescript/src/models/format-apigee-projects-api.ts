import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The format of the spec. */
export const FormatApigeeProjectsApi = {
  FormatUnspecified: "FORMAT_UNSPECIFIED",
  OpenApiSpec20: "OPEN_API_SPEC_2_0",
  OpenApiSpec30: "OPEN_API_SPEC_3_0",
  OpenApiSpec31: "OPEN_API_SPEC_3_1",
} as const;
export type FormatApigeeProjectsApi =
  | (typeof FormatApigeeProjectsApi)[keyof typeof FormatApigeeProjectsApi]
  | (string & {});

export const formatApigeeProjectsApiSchema: EnumSchema<FormatApigeeProjectsApi> =
  s.enumOf<FormatApigeeProjectsApi>(FormatApigeeProjectsApi);
