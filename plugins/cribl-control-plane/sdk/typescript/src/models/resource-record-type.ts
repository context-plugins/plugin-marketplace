import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The DNS record type (RR) to return. Defaults to 'A'. */
export const ResourceRecordType = {
  A: "A",
  Aaaa: "AAAA",
  Any: "ANY",
  Cname: "CNAME",
  Mx: "MX",
  Naptr: "NAPTR",
  Ns: "NS",
  Ptr: "PTR",
  Soa: "SOA",
  Srv: "SRV",
  Txt: "TXT",
} as const;
export type ResourceRecordType = (typeof ResourceRecordType)[keyof typeof ResourceRecordType] | (string & {});

export const resourceRecordTypeSchema: EnumSchema<ResourceRecordType> =
  s.enumOf<ResourceRecordType>(ResourceRecordType);
