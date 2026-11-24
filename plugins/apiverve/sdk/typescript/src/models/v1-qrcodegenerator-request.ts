import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1QrcodegeneratorRequest = {
  /** The text or data to encode in the QR code */
  value: string;
  /** The type of data being encoded. Advanced types (wifi, vcard) are premium. */
  type?: string;
  /** Output format. Vector formats (svg, webp) are premium. */
  format?: string;
  /** Size of the QR code in pixels (50-2048) */
  size?: number;
  /** Margin around the QR code in pixels (0-100) */
  margin?: number;
  /** Foreground color as hex code (e.g., #000000) */
  color?: string;
  /** Background color as hex code (e.g., #ffffff) */
  backgroundColor?: string;
  /** Style of QR code dots */
  dotStyle?: string;
  /** Style of corner squares */
  cornerSquareStyle?: string;
  /** Style of corner dots */
  cornerDotStyle?: string;
  /** Gradient configuration with type (linear, radial) and colorStops array */
  gradient?: string;
  /** URL of logo image to place in center of QR code */
  logo?: string;
  /** Size of logo relative to QR code (0.1-0.5) */
  logoSize?: number;
  /** Margin around logo in pixels */
  logoMargin?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1QrcodegeneratorRequestSchema: Schema<V1QrcodegeneratorRequest> =
  s.object<V1QrcodegeneratorRequest>(
    {
      value: s.string(),
      type: s.optional(s.string()),
      format: s.optional(s.string()),
      size: s.optional(s.float64()),
      margin: s.optional(s.float64()),
      color: s.optional(s.string()),
      backgroundColor: s.optional(s.string()),
      dotStyle: s.optional(s.string()),
      cornerSquareStyle: s.optional(s.string()),
      cornerDotStyle: s.optional(s.string()),
      gradient: s.optional(s.string()),
      logo: s.optional(s.string()),
      logoSize: s.optional(s.float64()),
      logoMargin: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
