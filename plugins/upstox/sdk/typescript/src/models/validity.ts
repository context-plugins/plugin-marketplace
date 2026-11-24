import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** It can be one of the following - DAY(default), IOC */
export const Validity = {
  Day: "DAY",
  Ioc: "IOC",
} as const;
export type Validity = (typeof Validity)[keyof typeof Validity] | (string & {});

export const validitySchema: EnumSchema<Validity> = s.enumOf<Validity>(Validity);
