import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Product line this coverage series belongs to. */
export const Service7 = {
  Compute: "compute",
  CloudSql: "cloud_sql",
} as const;
export type Service7 = (typeof Service7)[keyof typeof Service7] | (string & {});

export const service7Schema: EnumSchema<Service7> = s.enumOf<Service7>(Service7);
