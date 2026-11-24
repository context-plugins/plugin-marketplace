import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  qrCodeCustomizationsStaticPublicSchema,
  type QrCodeCustomizationsStaticPublic,
} from "./qr-code-customizations-static-public.js";

/**
 * Request body for generating a static QR code image. Customizations such as gradient,
 * background_gradient, frame, text and logo are not supported.
 */
export type PublicCreateStaticQrCodeRequest = {
  /** The raw content to encode in the QR code (e.g. a URL). */
  content: string;
  /** The group (brand) GUID used for access control and analytics. */
  groupGuid: string;
  /**
   * Appearance options for a static QR code. gradient, background_gradient, frame, text, and logo
   * are not supported.
   */
  renderCustomizations?: QrCodeCustomizationsStaticPublic;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicCreateStaticQrCodeRequestSchema: Schema<PublicCreateStaticQrCodeRequest> =
  s.object<PublicCreateStaticQrCodeRequest>(
    {
      content: s.string(),
      groupGuid: s.string(),
      renderCustomizations: s.optional(s.lazy(() => qrCodeCustomizationsStaticPublicSchema)),
      _keysMap: {
        groupGuid: "group_guid",
        renderCustomizations: "render_customizations",
      },
    },
    { additionalProperties: s.json() },
  );
