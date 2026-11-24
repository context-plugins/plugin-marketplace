import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { colorsSchema, type Colors } from "./colors.js";
import { QrCodeFrameType2, qrCodeFrameType2Schema } from "./qr-code-frame-type2.js";
import { text1Schema, type Text1 } from "./text1.js";

export type QrCodeFrameRequest = {
  /** The unique id of the selected frame @default QrCodeFrameType2.None */
  id?: QrCodeFrameType2;
  /** An object of named colors denoting which color should go to which area of the frame */
  colors?: Colors;
  /** The text to be inserted into the QR code's frame */
  text?: Text1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const qrCodeFrameRequestSchema: Schema<QrCodeFrameRequest> = s.object<QrCodeFrameRequest>(
  {
    id: s.defaulted(qrCodeFrameType2Schema, QrCodeFrameType2.None),
    colors: s.optional(s.lazy(() => colorsSchema)),
    text: s.optional(s.lazy(() => text1Schema)),
  },
  { additionalProperties: s.json() },
);
