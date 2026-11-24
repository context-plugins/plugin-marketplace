import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { certificateSummarySchema, type CertificateSummary } from "./certificate-summary.js";

export type ListCertificatesResponse = {
  /**
   * When the list is truncated, this value is present and contains the value to use for the
   * NextToken parameter in a subsequent pagination request.
   */
  nextToken?: string;
  /** A list of ACM certificates. */
  certificateSummaryList?: CertificateSummary[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listCertificatesResponseSchema: Schema<ListCertificatesResponse> =
  s.object<ListCertificatesResponse>(
    {
      nextToken: s.optional(s.string()),
      certificateSummaryList: s.optional(s.array(s.lazy(() => certificateSummarySchema))),
      _keysMap: {
        nextToken: "NextToken",
        certificateSummaryList: "CertificateSummaryList",
      },
    },
    { additionalProperties: s.json() },
  );
