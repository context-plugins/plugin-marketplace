import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { qrCodeErrorSchema, type QrCodeError } from "../qr-code-error.js";
import { qrCodeInternalSchema, qrCodeSchema, type QrCode } from "../qr-code.js";

export type QrcodesBulkResponse1 = QrCode | QrCodeError;

export const qrcodesBulkResponse1InternalSchema: Schema<QrcodesBulkResponse1> = s.of<QrcodesBulkResponse1>(
  s.union([s.lazy(() => qrCodeInternalSchema), s.lazy(() => qrCodeErrorSchema)]),
);

export const qrcodesBulkResponse1Schema: Schema<QrcodesBulkResponse1> = s.lazySchema(() =>
  s.of<QrcodesBulkResponse1>(s.union([s.lazy(() => qrCodeSchema), s.lazy(() => qrCodeErrorSchema)])),
);
