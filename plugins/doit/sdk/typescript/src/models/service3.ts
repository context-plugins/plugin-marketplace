import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** PS4C product line (`gcp_service`) this recommendation belongs to. */
export const Service3 = {
  Compute: "compute",
  CloudSql: "cloud_sql",
} as const;
export type Service3 = (typeof Service3)[keyof typeof Service3] | (string & {});

export const service3Schema: EnumSchema<Service3> = s.enumOf<Service3>(Service3);
