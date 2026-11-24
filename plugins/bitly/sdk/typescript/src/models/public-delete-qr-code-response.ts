import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { deletedLinkSchema, type DeletedLink } from "./deleted-link.js";
import { deletedQrCodeSchema, type DeletedQrCode } from "./deleted-qr-code.js";

/** QR Code delete response */
export type PublicDeleteQrCodeResponse = {
  qrcodesDeleted?: DeletedQrCode[];
  linksDeleted?: DeletedLink[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicDeleteQrCodeResponseSchema: Schema<PublicDeleteQrCodeResponse> =
  s.object<PublicDeleteQrCodeResponse>(
    {
      qrcodesDeleted: s.optional(s.array(s.lazy(() => deletedQrCodeSchema))),
      linksDeleted: s.optional(s.array(s.lazy(() => deletedLinkSchema))),
      _keysMap: {
        qrcodesDeleted: "qrcodes_deleted",
        linksDeleted: "links_deleted",
      },
    },
    { additionalProperties: s.json() },
  );
