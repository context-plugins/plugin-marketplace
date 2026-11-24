import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type QrcodesResponse = {
  /** The ID of the QR Code. */
  id: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const qrcodesResponseSchema: Schema<QrcodesResponse> = s.object<QrcodesResponse>(
  {
    id: s.string(),
  },
  { additionalProperties: s.json() },
);
