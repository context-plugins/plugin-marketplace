import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dynamicRoutingRuleSchema, type DynamicRoutingRule } from "./dynamic-routing-rule.js";
import { gs1MetadataSchema, type Gs1Metadata } from "./gs1-metadata.js";
import {
  qrCodeCustomizationsPublicSchema,
  type QrCodeCustomizationsPublic,
} from "./qr-code-customizations-public.js";
import { qrCodeTypeEnumSchema, type QrCodeTypeEnum } from "./qr-code-type-enum.js";

export type QrCodeDetails = {
  qrcodeId?: string;
  groupGuid?: string;
  title?: string;
  /** Contains GS1 related metadata */
  gs1?: Gs1Metadata;
  /** Options for customizing a QR Code's appearance */
  renderCustomizations?: QrCodeCustomizationsPublic;
  /**
   * The type of dynamic/static content the QR serves, e.g. Link In Bio page, micro site, bitlink,
   * email, text, Wifi, etc.
   */
  qrCodeType?: QrCodeTypeEnum;
  /** The bitlink associated with the qr code. Not all qr codes are associated with one. */
  bitlinkId?: string;
  /** A list of destination URLs that the qr code leads to. */
  longUrls?: string[];
  /** The serialized string of the QR code's content */
  serializedContent?: string;
  archived?: boolean;
  created?: string;
  modified?: string;
  /** Optional expiration timestamp for the QR code's bitlink (e.g., 2025-01-28T14:30:00+0000) */
  expirationAt?: string;
  /** A list of tags associated with QR code */
  tags?: string[];
  /** Dynamic routing rules for this QR code. Only present when at least one rule is configured. */
  dynamicRouting?: DynamicRoutingRule[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const qrCodeDetailsSchema: Schema<QrCodeDetails> = s.object<QrCodeDetails>(
  {
    qrcodeId: s.optional(s.string()),
    groupGuid: s.optional(s.string()),
    title: s.optional(s.string()),
    gs1: s.optional(s.lazy(() => gs1MetadataSchema)),
    renderCustomizations: s.optional(s.lazy(() => qrCodeCustomizationsPublicSchema)),
    qrCodeType: s.optional(s.lazy(() => qrCodeTypeEnumSchema)),
    bitlinkId: s.optional(s.string()),
    longUrls: s.optional(s.array(s.string())),
    serializedContent: s.optional(s.string()),
    archived: s.optional(s.boolean()),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    expirationAt: s.optional(s.string()),
    tags: s.optional(s.array(s.string())),
    dynamicRouting: s.optional(s.array(s.lazy(() => dynamicRoutingRuleSchema))),
    _keysMap: {
      qrcodeId: "qrcode_id",
      groupGuid: "group_guid",
      renderCustomizations: "render_customizations",
      qrCodeType: "qr_code_type",
      bitlinkId: "bitlink_id",
      longUrls: "long_urls",
      serializedContent: "serialized_content",
      expirationAt: "expiration_at",
      dynamicRouting: "dynamic_routing",
    },
  },
  { additionalProperties: s.json() },
);
