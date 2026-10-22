import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Describes the request body of a bulk upload API call */
export type BulkIndexRequest = {
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
};

export const bulkIndexRequestSchema: Schema<BulkIndexRequest> = s.object<BulkIndexRequest>({
  uploadId: s.string(),
  isFirstPage: s.optional(s.boolean()),
  isLastPage: s.optional(s.boolean()),
  forceRestartUpload: s.optional(s.boolean()),
});
