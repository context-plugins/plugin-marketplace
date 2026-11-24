import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { textSchema, type Text } from "./text.js";

/** Contains the center, top, and bottom text to be used in the QR code */
export type QrCodeText = {
  /** An object describing text with color */
  center?: Text;
  /** An object describing text with color */
  top?: Text;
  /** An object describing text with color */
  bottom?: Text;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const qrCodeTextSchema: Schema<QrCodeText> = s.object<QrCodeText>(
  {
    center: s.optional(s.lazy(() => textSchema)),
    top: s.optional(s.lazy(() => textSchema)),
    bottom: s.optional(s.lazy(() => textSchema)),
  },
  { additionalProperties: s.json() },
);
