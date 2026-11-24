import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Commitment type these settings apply to. */
export const Service1 = {
  Compute: "compute",
  Database: "database",
} as const;
export type Service1 = (typeof Service1)[keyof typeof Service1] | (string & {});

export const service1Schema: EnumSchema<Service1> = s.enumOf<Service1>(Service1);
