import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Product line these monthly stats belong to. */
export const Service4 = {
  Compute: "compute",
  CloudSql: "cloud_sql",
} as const;
export type Service4 = (typeof Service4)[keyof typeof Service4] | (string & {});

export const service4Schema: EnumSchema<Service4> = s.enumOf<Service4>(Service4);
