import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The unique id of the selected frame */
export const QrCodeFrameType2 = {
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
export type QrCodeFrameType2 = (typeof QrCodeFrameType2)[keyof typeof QrCodeFrameType2] | (string & {});

export const qrCodeFrameType2Schema: EnumSchema<QrCodeFrameType2> =
  s.enumOf<QrCodeFrameType2>(QrCodeFrameType2);
