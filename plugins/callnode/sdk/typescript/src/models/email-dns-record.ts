import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusCallnodeIoEmailApiSchema,
  type StatusCallnodeIoEmailApi,
} from "./status-callnode-io-email-api.js";
import { typeSchema, type Type } from "./type.js";

export type EmailDnsRecord = {
  /**
   * Always TXT: the DKIM key, the SPF entry and the DMARC policy, the three records verification
   * checks. No MX or CNAME is issued (receiving and tracking are off).
   */
  type?: Type;
  /** The full host to publish at, such as _dmarc.mail.acme.com. */
  name?: string;
  value?: string;
  priority?: number;
  ttl?: string;
  status?: StatusCallnodeIoEmailApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const emailDnsRecordSchema: Schema<EmailDnsRecord> = s.object<EmailDnsRecord>(
  {
    type: s.optional(s.lazy(() => typeSchema)),
    name: s.optional(s.string()),
    value: s.optional(s.string()),
    priority: s.optional(s.int()),
    ttl: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusCallnodeIoEmailApiSchema)),
  },
  { additionalProperties: s.json() },
);
