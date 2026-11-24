import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { codeSchema, type Code } from "./code.js";

export type QrCodeError = {
  /** The QR Code that caused the error. */
  qrcode?: Record<string, unknown>;
  /** The error message. */
  error: string;
  /** The error code. */
  code: Code;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const qrCodeErrorSchema: Schema<QrCodeError> = s.object<QrCodeError>(
  {
    qrcode: s.optional(s.record(s.string(), s.unknown())),
    error: s.string(),
    code: codeSchema,
  },
  { additionalProperties: s.json() },
);
