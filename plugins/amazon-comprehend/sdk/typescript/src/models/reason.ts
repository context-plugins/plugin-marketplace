import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Reason codes include the following values: DOCUMENT_SIZE_EXCEEDED - Document size is too large.
 * Check the size of your file and resubmit the request. UNSUPPORTED_DOC_TYPE - Document type is not
 * supported. Check the file type and resubmit the request. PAGE_LIMIT_EXCEEDED - Too many pages in
 * the document. Check the number of pages in your file and resubmit the request.
 * TEXTRACT_ACCESS_DENIED - Access denied to Amazon Textract. Verify that your account has
 * permission to use Amazon Textract API operations and resubmit the request. NOT_TEXTRACT_JSON -
 * Document is not Amazon Textract JSON format. Ve
 */
export const Reason = {
  DocumentSizeExceeded: "DOCUMENT_SIZE_EXCEEDED",
  UnsupportedDocType: "UNSUPPORTED_DOC_TYPE",
  PageLimitExceeded: "PAGE_LIMIT_EXCEEDED",
  TextractAccessDenied: "TEXTRACT_ACCESS_DENIED",
} as const;
export type Reason = (typeof Reason)[keyof typeof Reason] | (string & {});

export const reasonSchema: EnumSchema<Reason> = s.enumOf<Reason>(Reason);
