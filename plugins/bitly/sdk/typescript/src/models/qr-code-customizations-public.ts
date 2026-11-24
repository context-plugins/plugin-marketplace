import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { qrCodeBrandingSchema, type QrCodeBranding } from "./qr-code-branding.js";
import { qrCodeCornersSchema, type QrCodeCorners } from "./qr-code-corners.js";
import { QrCodeDotPatternType, qrCodeDotPatternTypeSchema } from "./qr-code-dot-pattern-type.js";
import { qrCodeFrameRequestSchema, type QrCodeFrameRequest } from "./qr-code-frame-request.js";
import { qrCodeGradientSchema, type QrCodeGradient } from "./qr-code-gradient.js";
import { qrCodeLogoPublicSchema, type QrCodeLogoPublic } from "./qr-code-logo-public.js";
import {
  qrCodeSpecSettingsPublicSchema,
  type QrCodeSpecSettingsPublic,
} from "./qr-code-spec-settings-public.js";
import { qrCodeTextSchema, type QrCodeText } from "./qr-code-text.js";

/** Options for customizing a QR Code's appearance */
export type QrCodeCustomizationsPublic = {
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
  gradient?: QrCodeGradient;
  backgroundGradient?: QrCodeGradient;
  logo?: QrCodeLogoPublic;
  frame?: QrCodeFrameRequest;
  /** Contains the center, top, and bottom text to be used in the QR code */
  text?: QrCodeText;
  branding?: QrCodeBranding;
  /** The QR code's editable spec settings, which for now is just the error correction */
  specSettings?: QrCodeSpecSettingsPublic;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const qrCodeCustomizationsPublicSchema: Schema<QrCodeCustomizationsPublic> =
  s.object<QrCodeCustomizationsPublic>(
    {
      backgroundColor: s.optional(s.string()),
      dotPatternColor: s.optional(s.string()),
      dotPatternType: s.defaulted(qrCodeDotPatternTypeSchema, QrCodeDotPatternType.Standard),
      corners: s.optional(s.lazy(() => qrCodeCornersSchema)),
      gradient: s.optional(s.lazy(() => qrCodeGradientSchema)),
      backgroundGradient: s.optional(s.lazy(() => qrCodeGradientSchema)),
      logo: s.optional(s.lazy(() => qrCodeLogoPublicSchema)),
      frame: s.optional(s.lazy(() => qrCodeFrameRequestSchema)),
      text: s.optional(s.lazy(() => qrCodeTextSchema)),
      branding: s.optional(s.lazy(() => qrCodeBrandingSchema)),
      specSettings: s.optional(s.lazy(() => qrCodeSpecSettingsPublicSchema)),
      _keysMap: {
        backgroundColor: "background_color",
        dotPatternColor: "dot_pattern_color",
        dotPatternType: "dot_pattern_type",
        backgroundGradient: "background_gradient",
        specSettings: "spec_settings",
      },
    },
    { additionalProperties: s.json() },
  );
