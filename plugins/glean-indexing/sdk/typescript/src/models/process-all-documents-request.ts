import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Describes the request body of the /processalldocuments API call */
export type ProcessAllDocumentsRequest = {
  /**
   * If provided, process documents only for this custom datasource. Otherwise all uploaded
   * documents are processed.
   */
  datasource?: string;
};

export const processAllDocumentsRequestSchema: Schema<ProcessAllDocumentsRequest> =
  s.object<ProcessAllDocumentsRequest>({
    datasource: s.optional(s.string()),
  });
