import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * **Optional include.** If a QR code was requested during payment creation for a QR-compatible
 * payment method, the QR code details will be available in this object.
 *
 * The QR code can be scanned by the customer to complete the payment on their mobile device. For
 * example, Bancontact QR payments can be completed by the customer using the Bancontact app.
 *
 * * `height` _integer_
 * * `width` _integer_
 * * `src` _string_
 */
export type QrCode = {
  /** The height of the QR code image in pixels. */
  height?: number;
  /** The width of the QR code image in pixels. */
  width?: number;
  /** The URL to the QR code image. */
  src?: string;
};

export const qrCodeSchema: Schema<QrCode> = s.object<QrCode>({
  height: s.optional(s.int()),
  width: s.optional(s.int()),
  src: s.optional(s.string()),
});
