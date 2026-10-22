import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Shared4 = {
  True: "true",
  False: "false",
} as const;
export type Shared4 = (typeof Shared4)[keyof typeof Shared4] | (string & {});

export const shared4Schema: EnumSchema<Shared4> = s.enumOf<Shared4>(Shared4);
