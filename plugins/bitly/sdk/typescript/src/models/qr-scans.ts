import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type QrScans = {
  scans?: number;
  date?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const qrScansSchema: Schema<QrScans> = s.object<QrScans>(
  {
    scans: s.optional(s.int()),
    date: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
