import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { createdBySchema, type CreatedBy } from "./created-by.js";
import {
  statusJuriSignDocumentsApiSchema,
  type StatusJuriSignDocumentsApi,
} from "./status-juri-sign-documents-api.js";

export type Document = {
  id?: string;
  title?: string;
  originalFilename?: string;
  status?: StatusJuriSignDocumentsApi;
  pageCount?: number;
  /** Size in bytes */
  fileSize?: number;
  /** SHA-256 hash of the original file */
  fileHash?: string;
  createdAt?: Date;
  createdBy?: CreatedBy;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const documentSchema: Schema<Document> = s.object<Document>(
  {
    id: s.optional(s.string()),
    title: s.optional(s.string()),
    originalFilename: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusJuriSignDocumentsApiSchema)),
    pageCount: s.optional(s.int()),
    fileSize: s.optional(s.int()),
    fileHash: s.optional(s.string()),
    createdAt: s.optional(s.dateTime()),
    createdBy: s.optional(s.lazy(() => createdBySchema)),
    _keysMap: {
      originalFilename: "original_filename",
      pageCount: "page_count",
      fileSize: "file_size",
      fileHash: "file_hash",
      createdAt: "created_at",
      createdBy: "created_by",
    },
  },
  { additionalProperties: s.json() },
);
