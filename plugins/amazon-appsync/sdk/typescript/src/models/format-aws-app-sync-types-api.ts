import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type format: SDL or JSON. */
export const FormatAwsAppSyncTypesApi = {
  Sdl: "SDL",
  Json: "JSON",
} as const;
export type FormatAwsAppSyncTypesApi =
  | (typeof FormatAwsAppSyncTypesApi)[keyof typeof FormatAwsAppSyncTypesApi]
  | (string & {});

export const formatAwsAppSyncTypesApiSchema: EnumSchema<FormatAwsAppSyncTypesApi> =
  s.enumOf<FormatAwsAppSyncTypesApi>(FormatAwsAppSyncTypesApi);
