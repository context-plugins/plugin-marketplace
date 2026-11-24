import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dynamicRoutingRuleSchema, type DynamicRoutingRule } from "./dynamic-routing-rule.js";
import { qrCodeTypeEnumSchema, type QrCodeTypeEnum } from "./qr-code-type-enum.js";

export type QrCodeMinimal = {
  qrcodeId?: string;
  groupGuid?: string;
  title?: string;
  /**
   * Set to true if the QR code's customization values have been changed from their default setting
   */
  isCustomized?: boolean;
  /** A serialized string of the QR code's content */
  serializedContent?: string;
  /**
   * The type of dynamic/static content the QR serves, e.g. Link In Bio page, micro site, bitlink,
   * email, text, Wifi, etc.
   */
  qrCodeType?: QrCodeTypeEnum;
  /** A list of destination URLs that the qr code leads to. */
  longUrls?: string[];
  /** The bitlink ID associated with the qr code. Not all qr codes are associated with one. */
  bitlinkId?: string;
  /** Set to true if QR code has GS1 values. */
  isGs1?: boolean;
  /** User that created the code. */
  createdBy?: string;
  /** A list of tags associated with QR code */
  tags?: string[];
  archived?: boolean;
  /** Optional expiration timestamp for the QR code's bitlink (e.g., 2025-01-28T14:30:00+0000) */
  expirationAt?: string;
  /** Dynamic routing rules for this QR code. Only present when at least one rule is configured. */
  dynamicRouting?: DynamicRoutingRule[];
  created?: string;
  modified?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const qrCodeMinimalSchema: Schema<QrCodeMinimal> = s.object<QrCodeMinimal>(
  {
    qrcodeId: s.optional(s.string()),
    groupGuid: s.optional(s.string()),
    title: s.optional(s.string()),
    isCustomized: s.optional(s.boolean()),
    serializedContent: s.optional(s.string()),
    qrCodeType: s.optional(s.lazy(() => qrCodeTypeEnumSchema)),
    longUrls: s.optional(s.array(s.string())),
    bitlinkId: s.optional(s.string()),
    isGs1: s.optional(s.boolean()),
    createdBy: s.optional(s.string()),
    tags: s.optional(s.array(s.string())),
    archived: s.optional(s.boolean()),
    expirationAt: s.optional(s.string()),
    dynamicRouting: s.optional(s.array(s.lazy(() => dynamicRoutingRuleSchema))),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    _keysMap: {
      qrcodeId: "qrcode_id",
      groupGuid: "group_guid",
      isCustomized: "is_customized",
      serializedContent: "serialized_content",
      qrCodeType: "qr_code_type",
      longUrls: "long_urls",
      bitlinkId: "bitlink_id",
      isGs1: "is_gs1",
      createdBy: "created_by",
      expirationAt: "expiration_at",
      dynamicRouting: "dynamic_routing",
    },
  },
  { additionalProperties: s.json() },
);
