import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Placeholder response returned after accepting a pronunciations CSV upload. */
export type PronunciationsCsvUploadResponse = {
  revision: number;
  hash: string;
  entries: number;
  uploadedAt?: Date;
  uploadedBy: string;
};

export const pronunciationsCsvUploadResponseSchema: Schema<PronunciationsCsvUploadResponse> =
  s.object<PronunciationsCsvUploadResponse>({
    revision: s.int(),
    hash: s.string(),
    entries: s.int(),
    uploadedAt: s.optional(s.dateTime()),
    uploadedBy: s.string(),
    _keysMap: {
      uploadedAt: "uploaded_at",
      uploadedBy: "uploaded_by",
    },
  });
