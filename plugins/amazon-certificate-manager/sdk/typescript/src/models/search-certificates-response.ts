import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { certificateSearchResultSchema, type CertificateSearchResult } from "./certificate-search-result.js";

export type SearchCertificatesResponse = {
  /**
   * A list of certificate search results containing certificate ARNs, X.509 attributes, and ACM
   * metadata.
   */
  results?: CertificateSearchResult[];
  /**
   * When the list is truncated, this value is present and contains the value to use for the
   * NextToken parameter in a subsequent pagination request.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchCertificatesResponseSchema: Schema<SearchCertificatesResponse> =
  s.object<SearchCertificatesResponse>(
    {
      results: s.optional(s.array(s.lazy(() => certificateSearchResultSchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        results: "Results",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
