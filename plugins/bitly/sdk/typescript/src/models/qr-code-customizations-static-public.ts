import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { qrCodeBrandingSchema, type QrCodeBranding } from "./qr-code-branding.js";
import { qrCodeCornersSchema, type QrCodeCorners } from "./qr-code-corners.js";
import { QrCodeDotPatternType, qrCodeDotPatternTypeSchema } from "./qr-code-dot-pattern-type.js";
import {
  qrCodeSpecSettingsPublicSchema,
  type QrCodeSpecSettingsPublic,
} from "./qr-code-spec-settings-public.js";

/**
 * Appearance options for a static QR code. gradient, background_gradient, frame, text, and logo are
 * not supported.
 */
export type QrCodeCustomizationsStaticPublic = {
  /** The QR code's background color in hex code format with values for alpha channel */
  backgroundColor?: string;
  /** The QR code's dot pattern color in hex code format */
  dotPatternColor?: string;
  /** @default QrCodeDotPatternType.Standard */
  dotPatternType?: QrCodeDotPatternType;
  /**
   * An object representing all three corners of the QR code. The corners corresponding to each
   * property are: corner_1 = top left, corner_2 = top right, and corner_3 = bottom right
   */
  corners?: QrCodeCorners;
  branding?: QrCodeBranding;
  /** The QR code's editable spec settings, which for now is just the error correction */
  specSettings?: QrCodeSpecSettingsPublic;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const qrCodeCustomizationsStaticPublicSchema: Schema<QrCodeCustomizationsStaticPublic> =
  s.object<QrCodeCustomizationsStaticPublic>(
    {
      backgroundColor: s.optional(s.string()),
      dotPatternColor: s.optional(s.string()),
      dotPatternType: s.defaulted(qrCodeDotPatternTypeSchema, QrCodeDotPatternType.Standard),
      corners: s.optional(s.lazy(() => qrCodeCornersSchema)),
      branding: s.optional(s.lazy(() => qrCodeBrandingSchema)),
      specSettings: s.optional(s.lazy(() => qrCodeSpecSettingsPublicSchema)),
      _keysMap: {
        backgroundColor: "background_color",
        dotPatternColor: "dot_pattern_color",
        dotPatternType: "dot_pattern_type",
        specSettings: "spec_settings",
      },
    },
    { additionalProperties: s.json() },
  );
