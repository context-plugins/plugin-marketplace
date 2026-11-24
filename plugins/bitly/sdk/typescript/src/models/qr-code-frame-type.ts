import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const QrCodeFrameType = {
  None: "none",
  BorderOnly: "border_only",
  TextBottom: "text_bottom",
  TooltipBottom: "tooltip_bottom",
  Arrow: "arrow",
  TextTop: "text_top",
  TextBottomInFrame: "text_bottom_in_frame",
  Script: "script",
  TextTopAndBottom: "text_top_and_bottom",
  Url: "url",
  Instagram: "instagram",
} as const;
export type QrCodeFrameType = (typeof QrCodeFrameType)[keyof typeof QrCodeFrameType] | (string & {});

export const qrCodeFrameTypeSchema: EnumSchema<QrCodeFrameType> = s.enumOf<QrCodeFrameType>(QrCodeFrameType);
