import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Sort1 = {
  ProtocolCount: "protocol_count",
} as const;
export type Sort1 = (typeof Sort1)[keyof typeof Sort1] | (string & {});

export const sort1Schema: EnumSchema<Sort1> = s.enumOf<Sort1>(Sort1);
