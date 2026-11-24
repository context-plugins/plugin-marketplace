import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bitlinkBodySchema, type BitlinkBody } from "./bitlink-body.js";
import { engagementSubtotalSchema, type EngagementSubtotal } from "./engagement-subtotal.js";
import { qrCodeMinimalSchema, type QrCodeMinimal } from "./qr-code-minimal.js";

/**
 * Response shape for top bitlinks and decoupled QR codes in a group, ranked together by engagement
 * count. `links` and `qr_codes` are independent lists (a link and a decoupled QR code are never the
 * same entity); `sorted_engagements` is the unified descending-by-engagement ordering across both,
 * with each entry's id referencing either a bitlink or a QR code guid. Coupled QRCs are listed by
 * their bitlink ID.
 */
export type TopLinksAndQrCodes = {
  links?: BitlinkBody[];
  qrCodes?: QrCodeMinimal[];
  sortedEngagements?: EngagementSubtotal[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const topLinksAndQrCodesSchema: Schema<TopLinksAndQrCodes> = s.object<TopLinksAndQrCodes>(
  {
    links: s.optional(s.array(s.lazy(() => bitlinkBodySchema))),
    qrCodes: s.optional(s.array(s.lazy(() => qrCodeMinimalSchema))),
    sortedEngagements: s.optional(s.array(s.lazy(() => engagementSubtotalSchema))),
    _keysMap: {
      qrCodes: "qr_codes",
      sortedEngagements: "sorted_engagements",
    },
  },
  { additionalProperties: s.json() },
);
