import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1DomainnamesRequest = {
  /** The domain name. */
  domainName: string;
  /**
   * The Amazon Resource Name (ARN) of the certificate. This can be an Certificate Manager (ACM)
   * certificate or an Identity and Access Management (IAM) server certificate.
   */
  certificateArn: string;
  /** A description of the DomainName. */
  description?: string;
  tags?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1DomainnamesRequestSchema: Schema<V1DomainnamesRequest> = s.object<V1DomainnamesRequest>(
  {
    domainName: s.string(),
    certificateArn: s.string(),
    description: s.optional(s.string()),
    tags: s.optional(s.record(s.string(), s.string())),
  },
  { additionalProperties: s.json() },
);
