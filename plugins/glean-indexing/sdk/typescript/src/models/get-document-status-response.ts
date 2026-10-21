import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Describes the response body of the /getdocumentstatus API call */
export type GetDocumentStatusResponse = {
  /** Upload status, enum of NOT_UPLOADED, UPLOADED, STATUS_UNKNOWN */
  uploadStatus?: string;
  /** Time of last successful upload, in epoch seconds */
  lastUploadedAt?: number;
  /** Indexing status, enum of NOT_INDEXED, INDEXED, STATUS_UNKNOWN */
  indexingStatus?: string;
  /** Time of last successful indexing, in epoch seconds */
  lastIndexedAt?: number;
};

export const getDocumentStatusResponseSchema: Schema<GetDocumentStatusResponse> =
  s.object<GetDocumentStatusResponse>({
    uploadStatus: s.optional(s.string()),
    lastUploadedAt: s.optional(s.int()),
    indexingStatus: s.optional(s.string()),
    lastIndexedAt: s.optional(s.int()),
  });
