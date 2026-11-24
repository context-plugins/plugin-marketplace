import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dnsPrevalidationDetailsSchema, type DnsPrevalidationDetails } from "./dns-prevalidation-details.js";

/** Exactly one member is set. */
export type PrevalidationDetails = {
  dnsPrevalidation?: DnsPrevalidationDetails;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const prevalidationDetailsSchema: Schema<PrevalidationDetails> = s.object<PrevalidationDetails>(
  {
    dnsPrevalidation: s.optional(s.lazy(() => dnsPrevalidationDetailsSchema)),
    _keysMap: {
      dnsPrevalidation: "DnsPrevalidation",
    },
  },
  { additionalProperties: s.json() },
);
