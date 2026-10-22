import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { qrCode1Schema, type QrCode1 } from "./qr-code1.js";

/** Additional pairing code data, present only when requested via the `include` parameter. */
export type Details1 = {
  /** The QR code representation of the pairing code. */
  qrCode?: QrCode1 | null;
};

export const details1Schema: Schema<Details1> = s.object<Details1>({
  qrCode: s.optionalNullable(s.lazy(() => qrCode1Schema)),
});
