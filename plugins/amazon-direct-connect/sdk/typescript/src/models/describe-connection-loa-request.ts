import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { loaContentTypeSchema, type LoaContentType } from "./loa-content-type.js";

export type DescribeConnectionLoaRequest = {
  /** The ID of the connection. */
  connectionId: string;
  /**
   * The name of the APN partner or service provider who establishes connectivity on your behalf. If
   * you specify this parameter, the LOA-CFA lists the provider name alongside your company name as
   * the requester of the cross connect.
   */
  providerName?: string;
  /**
   * The standard media type for the LOA-CFA document. The only supported value is application/pdf.
   */
  loaContentType?: LoaContentType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeConnectionLoaRequestSchema: Schema<DescribeConnectionLoaRequest> =
  s.object<DescribeConnectionLoaRequest>(
    {
      connectionId: s.string(),
      providerName: s.optional(s.string()),
      loaContentType: s.optional(s.lazy(() => loaContentTypeSchema)),
    },
    { additionalProperties: s.json() },
  );
