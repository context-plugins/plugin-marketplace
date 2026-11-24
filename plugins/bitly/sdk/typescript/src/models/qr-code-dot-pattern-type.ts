import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const QrCodeDotPatternType = {
  Standard: "standard",
  Circle: "circle",
  Block: "block",
  Blob: "blob",
  Rounded: "rounded",
  Vertical: "vertical",
  Horizontal: "horizontal",
  Triangle: "triangle",
  Heart: "heart",
  Star: "star",
  Diamond: "diamond",
} as const;
export type QrCodeDotPatternType =
  | (typeof QrCodeDotPatternType)[keyof typeof QrCodeDotPatternType]
  | (string & {});

export const qrCodeDotPatternTypeSchema: EnumSchema<QrCodeDotPatternType> =
  s.enumOf<QrCodeDotPatternType>(QrCodeDotPatternType);
