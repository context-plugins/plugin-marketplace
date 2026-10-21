import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { resourceRecordTypeSchema, type ResourceRecordType } from "./resource-record-type.js";

export type DnsLookupField = {
  /** Name of the field containing the hostname or IP address to look up. */
  inFieldName?: string;
  /** The DNS record type (RR) to return. Defaults to 'A'. */
  resourceRecordType?: ResourceRecordType;
  /** Name of field to add lookup results to. Leave blank to overwrite the lookup field. */
  outFieldName?: string;
};

export const dnsLookupFieldSchema: Schema<DnsLookupField> = s.object<DnsLookupField>({
  inFieldName: s.optional(s.string()),
  resourceRecordType: s.optional(s.lazy(() => resourceRecordTypeSchema)),
  outFieldName: s.optional(s.string()),
});
