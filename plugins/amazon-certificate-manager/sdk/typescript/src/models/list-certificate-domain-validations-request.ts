import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListCertificateDomainValidationsRequest = {
  /**
   * The Amazon Resource Name (ARN) of the certificate for which to list domain validation
   * summaries.
   */
  certificateArn: string;
  /**
   * A token returned by a previous call to ListCertificateDomainValidations. If the number of
   * results exceeds MaxItems, use this token to retrieve the next page of results.
   */
  nextToken?: string;
  /**
   * The maximum number of domain validation summaries to return. If you don't specify a value, the
   * default is 1000.
   */
  maxItems?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listCertificateDomainValidationsRequestSchema: Schema<ListCertificateDomainValidationsRequest> =
  s.object<ListCertificateDomainValidationsRequest>(
    {
      certificateArn: s.string(),
      nextToken: s.optional(s.string()),
      maxItems: s.optional(s.int()),
      _keysMap: {
        certificateArn: "CertificateArn",
        nextToken: "NextToken",
        maxItems: "MaxItems",
      },
    },
    { additionalProperties: s.json() },
  );
