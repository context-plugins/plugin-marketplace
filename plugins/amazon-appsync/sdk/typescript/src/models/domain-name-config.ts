import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DomainNameConfig = {
  /** The domain name. */
  domainName?: string;
  /** A description of the DomainName configuration. */
  description?: string;
  /**
   * The Amazon Resource Name (ARN) of the certificate. This can be an Certificate Manager (ACM)
   * certificate or an Identity and Access Management (IAM) server certificate.
   */
  certificateArn?: string;
  /** The domain name that AppSync provides. */
  appsyncDomainName?: string;
  /** The ID of your Amazon Route 53 hosted zone. */
  hostedZoneId?: string;
  tags?: Record<string, string>;
  /** The Amazon Resource Name (ARN) of the domain name. */
  domainNameArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const domainNameConfigSchema: Schema<DomainNameConfig> = s.object<DomainNameConfig>(
  {
    domainName: s.optional(s.string()),
    description: s.optional(s.string()),
    certificateArn: s.optional(s.string()),
    appsyncDomainName: s.optional(s.string()),
    hostedZoneId: s.optional(s.string()),
    tags: s.optional(s.record(s.string(), s.string())),
    domainNameArn: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
