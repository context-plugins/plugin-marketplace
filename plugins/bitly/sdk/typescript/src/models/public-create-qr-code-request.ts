import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dynamicRoutingRuleSchema, type DynamicRoutingRule } from "./dynamic-routing-rule.js";
import { gs1MetadataSchema, type Gs1Metadata } from "./gs1-metadata.js";
import {
  qrCodeCustomizationsPublicSchema,
  type QrCodeCustomizationsPublic,
} from "./qr-code-customizations-public.js";
import { qrCodeDestinationSchema, type QrCodeDestination } from "./qr-code-destination.js";

/** Customization and content values for a QR code created through the public API */
export type PublicCreateQrCodeRequest = {
  /** The title of the QR Code */
  title?: string;
  /** Identify which group to place the QR Code. */
  groupGuid: string;
  /** Options for customizing a QR Code's appearance */
  renderCustomizations?: QrCodeCustomizationsPublic;
  /** A boolean representing if the QR code should be archived (hidden from the UI) upon creation */
  archived?: boolean;
  destination: QrCodeDestination;
  /** Contains GS1 related metadata */
  gs1?: Gs1Metadata;
  /**
   * Optional expiration timestamp for the QR code's bitlink (e.g., 2025-01-28T14:30:00+0000).
   * Minimum expiration time is 5 minutes from now and maximum is 1 year.
   */
  expirationAt?: string;
  /** A list of tags to add to the QR code */
  tags?: string[];
  /**
   * Optional dynamic routing rules for this decoupled QR code. Only supported for long_url
   * destinations. Providing this field replaces all existing rules. Send an empty array to clear
   * all rules.
   */
  dynamicRouting?: DynamicRoutingRule[];
  /** @default "bit.ly" */
  domain?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicCreateQrCodeRequestSchema: Schema<PublicCreateQrCodeRequest> =
  s.object<PublicCreateQrCodeRequest>(
    {
      title: s.optional(s.string()),
      groupGuid: s.string(),
      renderCustomizations: s.optional(s.lazy(() => qrCodeCustomizationsPublicSchema)),
      archived: s.optional(s.boolean()),
      destination: qrCodeDestinationSchema,
      gs1: s.optional(s.lazy(() => gs1MetadataSchema)),
      expirationAt: s.optional(s.string()),
      tags: s.optional(s.array(s.string())),
      dynamicRouting: s.optional(s.array(s.lazy(() => dynamicRoutingRuleSchema))),
      domain: s.defaulted(s.string(), "bit.ly"),
      _keysMap: {
        groupGuid: "group_guid",
        renderCustomizations: "render_customizations",
        expirationAt: "expiration_at",
        dynamicRouting: "dynamic_routing",
      },
    },
    { additionalProperties: s.json() },
  );
