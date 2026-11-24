import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TypeHudPlatformJobsApi = {
  Text: "text",
  Image: "image",
  Audio: "audio",
} as const;
export type TypeHudPlatformJobsApi =
  | (typeof TypeHudPlatformJobsApi)[keyof typeof TypeHudPlatformJobsApi]
  | (string & {});

export const typeHudPlatformJobsApiSchema: EnumSchema<TypeHudPlatformJobsApi> =
  s.enumOf<TypeHudPlatformJobsApi>(TypeHudPlatformJobsApi);
