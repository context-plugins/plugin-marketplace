import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { domainScopeSchema, type DomainScope } from "./domain-scope.js";

export type DnsPrevalidationOptions = {
  domainScope?: DomainScope;
  /** The Route 53 hosted zone ID for DNS validation. */
  hostedZoneId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dnsPrevalidationOptionsSchema: Schema<DnsPrevalidationOptions> =
  s.object<DnsPrevalidationOptions>(
    {
      domainScope: s.optional(s.lazy(() => domainScopeSchema)),
      hostedZoneId: s.optional(s.string()),
      _keysMap: {
        domainScope: "DomainScope",
        hostedZoneId: "HostedZoneId",
      },
    },
    { additionalProperties: s.json() },
  );
