import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dnsNameFilterSchema, type DnsNameFilter } from "./dns-name-filter.js";

/** Exactly one member is set. */
export type SubjectAlternativeNameFilter = {
  dnsName?: DnsNameFilter;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subjectAlternativeNameFilterSchema: Schema<SubjectAlternativeNameFilter> =
  s.object<SubjectAlternativeNameFilter>(
    {
      dnsName: s.optional(s.lazy(() => dnsNameFilterSchema)),
      _keysMap: {
        dnsName: "DnsName",
      },
    },
    { additionalProperties: s.json() },
  );
