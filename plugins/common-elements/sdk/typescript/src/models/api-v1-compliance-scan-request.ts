import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV1ComplianceScanRequest = {
  /** The full text of the governing document to analyze. */
  text: string;
  /** Two-letter state code (e.g. "FL", "GA"). */
  state: string;
  /**
   * Optional. One of: "governing_document" (default), "cc_and_rs", "bylaws", "articles",
   * "rules_and_regulations".
   */
  docType?: string;
};

export const apiV1ComplianceScanRequestSchema: Schema<ApiV1ComplianceScanRequest> =
  s.object<ApiV1ComplianceScanRequest>({
    text: s.string(),
    state: s.string(),
    docType: s.optional(s.string()),
    _keysMap: {
      docType: "doc_type",
    },
  });
