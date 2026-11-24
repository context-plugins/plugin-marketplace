import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dynamicRoutingRuleSchema, type DynamicRoutingRule } from "./dynamic-routing-rule.js";
import {
  qrCodeCustomizationsPublicSchema,
  type QrCodeCustomizationsPublic,
} from "./qr-code-customizations-public.js";

/** Customization and content values for a QR code created through the public API */
export type PublicUpdateQrCodeRequest = {
  title?: string;
  /** Options for customizing a QR Code's appearance */
  renderCustomizations?: QrCodeCustomizationsPublic;
  /** A boolean representing if the QR code has been archived */
  archived?: boolean;
  /**
   * Optional expiration timestamp for the QR code's bitlink (e.g., 2025-01-28T14:30:00+0000).
   * Minimum expiration time is 5 minutes from now and maximum is 1 year.
   */
  expirationAt?: string;
  /** A list of tags to add to the QR code */
  tags?: string[];
  /**
   * Dynamic routing rules for this QR code. Providing this field replaces all existing rules. Send
   * an empty array to clear all rules.
   */
  dynamicRouting?: DynamicRoutingRule[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicUpdateQrCodeRequestSchema: Schema<PublicUpdateQrCodeRequest> =
  s.object<PublicUpdateQrCodeRequest>(
    {
      title: s.optional(s.string()),
      renderCustomizations: s.optional(s.lazy(() => qrCodeCustomizationsPublicSchema)),
      archived: s.optional(s.boolean()),
      expirationAt: s.optional(s.string()),
      tags: s.optional(s.array(s.string())),
      dynamicRouting: s.optional(s.array(s.lazy(() => dynamicRoutingRuleSchema))),
      _keysMap: {
        renderCustomizations: "render_customizations",
        expirationAt: "expiration_at",
        dynamicRouting: "dynamic_routing",
      },
    },
    { additionalProperties: s.json() },
  );
