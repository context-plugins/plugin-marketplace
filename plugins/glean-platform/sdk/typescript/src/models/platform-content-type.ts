import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PlatformContentType = {
  Text: "text",
} as const;
export type PlatformContentType =
  | (typeof PlatformContentType)[keyof typeof PlatformContentType]
  | (string & {});

export const platformContentTypeSchema: EnumSchema<PlatformContentType> =
  s.enumOf<PlatformContentType>(PlatformContentType);
