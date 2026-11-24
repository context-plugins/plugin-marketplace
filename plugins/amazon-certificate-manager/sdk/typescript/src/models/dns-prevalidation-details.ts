import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { domainScopeSchema, type DomainScope } from "./domain-scope.js";
import { resourceRecordSchema, type ResourceRecord } from "./resource-record.js";

export type DnsPrevalidationDetails = {
  domainScope?: DomainScope;
  /** The Route 53 hosted zone ID for DNS validation. */
  hostedZoneId?: string;
  resourceRecord?: ResourceRecord;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dnsPrevalidationDetailsSchema: Schema<DnsPrevalidationDetails> =
  s.object<DnsPrevalidationDetails>(
    {
      domainScope: s.optional(s.lazy(() => domainScopeSchema)),
      hostedZoneId: s.optional(s.string()),
      resourceRecord: s.optional(s.lazy(() => resourceRecordSchema)),
      _keysMap: {
        domainScope: "DomainScope",
        hostedZoneId: "HostedZoneId",
        resourceRecord: "ResourceRecord",
      },
    },
    { additionalProperties: s.json() },
  );
