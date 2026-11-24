import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { emailDnsRecordSchema, type EmailDnsRecord } from "./email-dns-record.js";
import { newDomainLimitSchema, type NewDomainLimit } from "./new-domain-limit.js";
import {
  statusCallnodeIoEmailApiSchema,
  type StatusCallnodeIoEmailApi,
} from "./status-callnode-io-email-api.js";

export type EmailDomain = {
  id?: string;
  domain?: string;
  status?: StatusCallnodeIoEmailApi;
  dnsRecords?: EmailDnsRecord[];
  verificationError?: string | null;
  verifiedAt?: Date | null;
  lastCheckedAt?: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
  /**
   * On the create, verify and refresh=1 answers only (absent on plain reads): the per-day cap on a
   * domain registered less than 30 days ago, rising over its first month and reset at 00:00 UTC;
   * null once the domain is not capped.
   */
  newDomainLimit?: NewDomainLimit | null;
  /** On the create response only - true when the account already held the domain. */
  replay?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const emailDomainSchema: Schema<EmailDomain> = s.object<EmailDomain>(
  {
    id: s.optional(s.string()),
    domain: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusCallnodeIoEmailApiSchema)),
    dnsRecords: s.optional(s.array(s.lazy(() => emailDnsRecordSchema))),
    verificationError: s.optionalNullable(s.string()),
    verifiedAt: s.optionalNullable(s.dateTime()),
    lastCheckedAt: s.optionalNullable(s.dateTime()),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    newDomainLimit: s.optionalNullable(s.lazy(() => newDomainLimitSchema)),
    replay: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
