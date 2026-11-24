import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The QR code's editable spec settings, which for now is just the error correction */
export type QrCodeSpecSettingsPublic = {
  /** The amount of error correction that the QR code was generated with */
  errorCorrection?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const qrCodeSpecSettingsPublicSchema: Schema<QrCodeSpecSettingsPublic> =
  s.object<QrCodeSpecSettingsPublic>(
    {
      errorCorrection: s.optional(s.int()),
      _keysMap: {
        errorCorrection: "error_correction",
      },
    },
    { additionalProperties: s.json() },
  );
