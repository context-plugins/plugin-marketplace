import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Commitment type this projection group belongs to. */
export const Service6 = {
  Compute: "compute",
  CloudSql: "cloud_sql",
} as const;
export type Service6 = (typeof Service6)[keyof typeof Service6] | (string & {});

export const service6Schema: EnumSchema<Service6> = s.enumOf<Service6>(Service6);
