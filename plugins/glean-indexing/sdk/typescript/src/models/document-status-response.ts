import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Describes the document status response body */
export type DocumentStatusResponse = {
  /** Upload status, enum of NOT_UPLOADED, UPLOADED, STATUS_UNKNOWN */
  uploadStatus?: string;
  /** Time of last successful upload for the document, in ISO 8601 format */
  lastUploadedAt?: string;
  /** Indexing status, enum of NOT_INDEXED, INDEXED, STATUS_UNKNOWN */
  indexingStatus?: string;
  /** Time of last successful indexing for the document, in ISO 8601 format */
  lastIndexedAt?: string;
  /**
   * Permission identity status, enum of NOT_UPLOADED, UPLOADED, STATUS_UNKNOWN (Always unknown if
   * `identityDatasourceName` is set). Document visibility may be affected status is `NOT_UPLOADED`.
   */
  permissionIdentityStatus?: string;
};

export const documentStatusResponseSchema: Schema<DocumentStatusResponse> = s.object<DocumentStatusResponse>({
  uploadStatus: s.optional(s.string()),
  lastUploadedAt: s.optional(s.string()),
  indexingStatus: s.optional(s.string()),
  lastIndexedAt: s.optional(s.string()),
  permissionIdentityStatus: s.optional(s.string()),
});
