import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Data3 = {
  /** Signed URL of the rendered PDF (present when 'pdf' was requested). */
  pdfUrl?: string;
  /** Signed URL of the rendered PNG (present when 'png' was requested). */
  pngUrl?: string;
  /** Signed URL of a hosted share page previewing the artifact. */
  shareUrl?: string;
  /** When the signed URLs expire. */
  expiresAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data3Schema: Schema<Data3> = s.object<Data3>(
  {
    pdfUrl: s.optional(s.string()),
    pngUrl: s.optional(s.string()),
    shareUrl: s.optional(s.string()),
    expiresAt: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
