import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The QR code representation of the pairing code. */
export type QrCode1 = {
  height?: number;
  width?: number;
  src?: string;
};

export const qrCode1Schema: Schema<QrCode1> = s.object<QrCode1>({
  height: s.optional(s.float64()),
  width: s.optional(s.float64()),
  src: s.optional(s.string()),
});
