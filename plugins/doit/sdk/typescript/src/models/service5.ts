import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Product line these settings apply to. */
export const Service5 = {
  Compute: "compute",
  CloudSql: "cloud_sql",
} as const;
export type Service5 = (typeof Service5)[keyof typeof Service5] | (string & {});

export const service5Schema: EnumSchema<Service5> = s.enumOf<Service5>(Service5);
