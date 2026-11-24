import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  certificateFilterStatementSchema,
  type CertificateFilterStatement,
} from "./certificate-filter-statement.js";
import { sortBy1Schema, type SortBy1 } from "./sort-by1.js";
import { sortOrder1Schema, type SortOrder1 } from "./sort-order1.js";

export type SearchCertificatesRequest = {
  /** Exactly one member is set. */
  filterStatement?: CertificateFilterStatement;
  /** The maximum number of results to return in the response. Default is 100. */
  maxResults?: number;
  /**
   * Use this parameter only when paginating results and only in a subsequent request after you
   * receive a response with truncated results. Set it to the value of NextToken from the response
   * you just received.
   */
  nextToken?: string;
  /**
   * Specifies the field to sort results by. Valid values are CREATED_AT, NOT_AFTER, STATUS,
   * RENEWAL_STATUS, EXPORTED, IN_USE, NOT_BEFORE, KEY_ALGORITHM, TYPE, CERTIFICATE_ARN,
   * COMMON_NAME, REVOKED_AT, RENEWAL_ELIGIBILITY, ISSUED_AT, MANAGED_BY, EXPORT_OPTION,
   * VALIDATION_METHOD, and IMPORTED_AT.
   */
  sortBy?: SortBy1;
  /** Specifies the order of sorted results. Valid values are ASCENDING or DESCENDING. */
  sortOrder?: SortOrder1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchCertificatesRequestSchema: Schema<SearchCertificatesRequest> =
  s.object<SearchCertificatesRequest>(
    {
      filterStatement: s.optional(s.lazy(() => certificateFilterStatementSchema)),
      maxResults: s.optional(s.int()),
      nextToken: s.optional(s.string()),
      sortBy: s.optional(s.lazy(() => sortBy1Schema)),
      sortOrder: s.optional(s.lazy(() => sortOrder1Schema)),
      _keysMap: {
        filterStatement: "FilterStatement",
        maxResults: "MaxResults",
        nextToken: "NextToken",
        sortBy: "SortBy",
        sortOrder: "SortOrder",
      },
    },
    { additionalProperties: s.json() },
  );
