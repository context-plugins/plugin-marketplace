import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** One bulk WHOIS result; success items also carry all WhoisResponse fields. */
export type BulkWhoisItem = {
  status?: boolean;
  domainName?: string;
  error?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bulkWhoisItemSchema: Schema<BulkWhoisItem> = s.object<BulkWhoisItem>(
  {
    status: s.optional(s.boolean()),
    domainName: s.optional(s.string()),
    error: s.optional(s.string()),
    _keysMap: {
      domainName: "domain_name",
    },
  },
  { additionalProperties: s.json() },
);
