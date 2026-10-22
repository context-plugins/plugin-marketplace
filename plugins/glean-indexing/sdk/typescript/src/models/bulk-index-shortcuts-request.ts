import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { externalShortcutSchema, type ExternalShortcut } from "./external-shortcut.js";

/** Describes the request body of the /bulkindexshortcuts API call */
export type BulkIndexShortcutsRequest = {
  /** Unique id that must be used for this bulk upload instance */
  uploadId: string;
  /** true if this is the first page of the upload. Defaults to false */
  isFirstPage?: boolean;
  /** true if this is the last page of the upload. Defaults to false */
  isLastPage?: boolean;
  /**
   * Flag to discard previous upload attempts and start from scratch. Must be specified with
   * isFirstPage=true
   */
  forceRestartUpload?: boolean;
  /** Batch of shortcuts information */
  shortcuts: ExternalShortcut[];
};

export const bulkIndexShortcutsRequestSchema: Schema<BulkIndexShortcutsRequest> =
  s.object<BulkIndexShortcutsRequest>({
    uploadId: s.string(),
    isFirstPage: s.optional(s.boolean()),
    isLastPage: s.optional(s.boolean()),
    forceRestartUpload: s.optional(s.boolean()),
    shortcuts: s.array(s.lazy(() => externalShortcutSchema)),
  });
