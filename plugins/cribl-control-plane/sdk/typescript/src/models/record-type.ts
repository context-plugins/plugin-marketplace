import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** DNS record type to resolve */
export const RecordType = {
  Srv: "SRV",
  A: "A",
  Aaaa: "AAAA",
} as const;
export type RecordType = (typeof RecordType)[keyof typeof RecordType] | (string & {});

export const recordTypeSchema: EnumSchema<RecordType> = s.enumOf<RecordType>(RecordType);
