import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type QrcodesBulkResponse = {
  /** The number of QR Codes deleted. */
  deletedCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const qrcodesBulkResponseSchema: Schema<QrcodesBulkResponse> = s.object<QrcodesBulkResponse>(
  {
    deletedCount: s.float64(),
  },
  { additionalProperties: s.json() },
);
