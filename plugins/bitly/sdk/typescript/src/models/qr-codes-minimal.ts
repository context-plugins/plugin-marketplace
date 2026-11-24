import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { qrCodeMinimalSchema, type QrCodeMinimal } from "./qr-code-minimal.js";
import { qrPaginationSchema, type QrPagination } from "./qr-pagination.js";

/** QR code paginated list Response */
export type QrCodesMinimal = {
  qrCodes?: QrCodeMinimal[];
  /** This object specifies how to query the next set of results. */
  pagination?: QrPagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const qrCodesMinimalSchema: Schema<QrCodesMinimal> = s.object<QrCodesMinimal>(
  {
    qrCodes: s.optional(s.array(s.lazy(() => qrCodeMinimalSchema))),
    pagination: s.optional(s.lazy(() => qrPaginationSchema)),
    _keysMap: {
      qrCodes: "qr_codes",
    },
  },
  { additionalProperties: s.json() },
);
