import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reasonSchema, type Reason } from "./reason.js";

export type InvalidRequestDetail = {
  /**
   * Reason codes include the following values: DOCUMENT_SIZE_EXCEEDED - Document size is too large.
   * Check the size of your file and resubmit the request. UNSUPPORTED_DOC_TYPE - Document type is
   * not supported. Check the file type and resubmit the request. PAGE_LIMIT_EXCEEDED - Too many
   * pages in the document. Check the number of pages in your file and resubmit the request.
   * TEXTRACT_ACCESS_DENIED - Access denied to Amazon Textract. Verify that your account has
   * permission to use Amazon Textract API operations and resubmit the request. NOT_TEXTRACT_JSON -
   * Document is not Amazon Textract JSON format. Ve
   */
  reason?: Reason;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const invalidRequestDetailSchema: Schema<InvalidRequestDetail> = s.object<InvalidRequestDetail>(
  {
    reason: s.optional(s.lazy(() => reasonSchema)),
    _keysMap: {
      reason: "Reason",
    },
  },
  { additionalProperties: s.json() },
);
