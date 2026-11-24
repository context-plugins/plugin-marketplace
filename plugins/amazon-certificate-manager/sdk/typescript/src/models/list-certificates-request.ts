import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  certificateKeyPairOrigin4Schema,
  type CertificateKeyPairOrigin4,
} from "./certificate-key-pair-origin4.js";
import { certificateStatusSchema, type CertificateStatus } from "./certificate-status.js";
import { filtersSchema, type Filters } from "./filters.js";
import { sortBySchema, type SortBy } from "./sort-by.js";
import { sortOrderSchema, type SortOrder } from "./sort-order.js";

export type ListCertificatesRequest = {
  /** Filter the certificate list by status value. */
  certificateStatuses?: CertificateStatus[];
  /**
   * Filter the certificate list by certificate key pair origin. Specify one or more
   * CertificateKeyPairOrigin values. Default filtering returns only certificates with key pair
   * origin of AWS_MANAGED and CUSTOMER_PROVIDED.
   */
  certificateKeyPairOrigins?: CertificateKeyPairOrigin4[];
  includes?: Filters;
  /**
   * Use this parameter only when paginating results and only in a subsequent request after you
   * receive a response with truncated results. Set it to the value of NextToken from the response
   * you just received.
   */
  nextToken?: string;
  /**
   * Use this parameter when paginating results to specify the maximum number of items to return in
   * the response. If additional items exist beyond the number you specify, the NextToken element is
   * sent in the response. Use this NextToken value in a subsequent request to retrieve additional
   * items.
   */
  maxItems?: number;
  /**
   * Specifies the field to sort results by. If you specify SortBy, you must also specify SortOrder.
   */
  sortBy?: SortBy;
  /**
   * Specifies the order of sorted results. If you specify SortOrder, you must also specify SortBy.
   */
  sortOrder?: SortOrder;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listCertificatesRequestSchema: Schema<ListCertificatesRequest> =
  s.object<ListCertificatesRequest>(
    {
      certificateStatuses: s.optional(s.array(s.lazy(() => certificateStatusSchema))),
      certificateKeyPairOrigins: s.optional(s.array(s.lazy(() => certificateKeyPairOrigin4Schema))),
      includes: s.optional(s.lazy(() => filtersSchema)),
      nextToken: s.optional(s.string()),
      maxItems: s.optional(s.int()),
      sortBy: s.optional(s.lazy(() => sortBySchema)),
      sortOrder: s.optional(s.lazy(() => sortOrderSchema)),
      _keysMap: {
        certificateStatuses: "CertificateStatuses",
        certificateKeyPairOrigins: "CertificateKeyPairOrigins",
        includes: "Includes",
        nextToken: "NextToken",
        maxItems: "MaxItems",
        sortBy: "SortBy",
        sortOrder: "SortOrder",
      },
    },
    { additionalProperties: s.json() },
  );
