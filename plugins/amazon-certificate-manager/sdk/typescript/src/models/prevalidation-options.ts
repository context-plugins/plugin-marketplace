import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dnsPrevalidationOptionsSchema, type DnsPrevalidationOptions } from "./dns-prevalidation-options.js";

/** Exactly one member is set. */
export type PrevalidationOptions = {
  dnsPrevalidation?: DnsPrevalidationOptions;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const prevalidationOptionsSchema: Schema<PrevalidationOptions> = s.object<PrevalidationOptions>(
  {
    dnsPrevalidation: s.optional(s.lazy(() => dnsPrevalidationOptionsSchema)),
    _keysMap: {
      dnsPrevalidation: "DnsPrevalidation",
    },
  },
  { additionalProperties: s.json() },
);
