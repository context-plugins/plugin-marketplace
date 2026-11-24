import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BlockResourceType = {
  Font: "font",
  Image: "image",
  Media: "media",
  Stylesheet: "stylesheet",
  Other: "other",
} as const;
export type BlockResourceType = (typeof BlockResourceType)[keyof typeof BlockResourceType] | (string & {});

export const blockResourceTypeSchema: EnumSchema<BlockResourceType> =
  s.enumOf<BlockResourceType>(BlockResourceType);
