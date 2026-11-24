import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Service2 = {
  Compute: "compute",
  Database: "database",
} as const;
export type Service2 = (typeof Service2)[keyof typeof Service2] | (string & {});

export const service2Schema: EnumSchema<Service2> = s.enumOf<Service2>(Service2);
