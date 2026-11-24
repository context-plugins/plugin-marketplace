import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { domainValidationSummarySchema, type DomainValidationSummary } from "./domain-validation-summary.js";

export type ListCertificateDomainValidationsResponse = {
  /**
   * A list of DomainValidationSummary objects, one for each domain on the certificate. Each object
   * contains the domain name and its active and requested validation configurations.
   */
  domainValidationSummaryList?: DomainValidationSummary[];
  /**
   * If the number of results exceeds MaxItems, this token is included in the response. Use this
   * token in a subsequent ListCertificateDomainValidations request to retrieve the next page of
   * results.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listCertificateDomainValidationsResponseSchema: Schema<ListCertificateDomainValidationsResponse> =
  s.object<ListCertificateDomainValidationsResponse>(
    {
      domainValidationSummaryList: s.optional(s.array(s.lazy(() => domainValidationSummarySchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        domainValidationSummaryList: "DomainValidationSummaryList",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
