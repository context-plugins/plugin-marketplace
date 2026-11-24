import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { asnInfoSchema, type AsnInfo } from "./asn-info.js";

/** ASN WHOIS v2 (/v2.0/asn-whois) — pass-through of ipgeolocation ASN data. */
export type AsnWhoisResponse = {
  asn?: AsnInfo;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const asnWhoisResponseSchema: Schema<AsnWhoisResponse> = s.object<AsnWhoisResponse>(
  {
    asn: s.optional(s.lazy(() => asnInfoSchema)),
  },
  { additionalProperties: s.json() },
);
