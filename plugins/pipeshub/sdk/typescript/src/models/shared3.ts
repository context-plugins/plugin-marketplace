import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Shared3 = {
  True: "true",
  False: "false",
  _1: "1",
  _0: "0",
} as const;
export type Shared3 = (typeof Shared3)[keyof typeof Shared3] | (string & {});

export const shared3Schema: EnumSchema<Shared3> = s.enumOf<Shared3>(Shared3);
