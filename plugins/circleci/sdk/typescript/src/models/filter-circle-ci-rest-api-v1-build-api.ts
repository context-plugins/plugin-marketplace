import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FilterCircleCiRestApiV1BuildApi = {
  Completed: "completed",
  Successful: "successful",
  Failed: "failed",
  Running: "running",
} as const;
export type FilterCircleCiRestApiV1BuildApi =
  | (typeof FilterCircleCiRestApiV1BuildApi)[keyof typeof FilterCircleCiRestApiV1BuildApi]
  | (string & {});

export const filterCircleCiRestApiV1BuildApiSchema: EnumSchema<FilterCircleCiRestApiV1BuildApi> =
  s.enumOf<FilterCircleCiRestApiV1BuildApi>(FilterCircleCiRestApiV1BuildApi);
