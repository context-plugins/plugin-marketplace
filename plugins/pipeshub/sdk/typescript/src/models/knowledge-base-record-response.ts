import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { locationSchema, type Location } from "./location.js";
import { recordModelSchema, type RecordModel } from "./record-model.js";

export type KnowledgeBaseRecordResponse = {
  success?: boolean;
  message?: string;
  /**
   * A record represents a single document, file, or content item within a knowledge base. Records
   * can originate from file uploads or external connectors (Google Drive, OneDrive, etc.).
   */
  record?: RecordModel;
  /** Epoch milliseconds when the response was generated */
  timestamp?: number;
  fileUpdated?: boolean;
  location?: Location;
  kb?: Record<string, unknown>;
  userPermission?: string;
};

export const knowledgeBaseRecordResponseSchema: Schema<KnowledgeBaseRecordResponse> =
  s.object<KnowledgeBaseRecordResponse>({
    success: s.optional(s.boolean()),
    message: s.optional(s.string()),
    record: s.optional(s.lazy(() => recordModelSchema)),
    timestamp: s.optional(s.int()),
    fileUpdated: s.optional(s.boolean()),
    location: s.optional(s.lazy(() => locationSchema)),
    kb: s.optional(s.record(s.string(), s.unknown())),
    userPermission: s.optional(s.string()),
  });
