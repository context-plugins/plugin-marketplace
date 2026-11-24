import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Outcome1 = {
  Ok: "ok",
  Processing: "processing",
  Error: "error",
} as const;
export type Outcome1 = (typeof Outcome1)[keyof typeof Outcome1] | (string & {});

export const outcome1Schema: EnumSchema<Outcome1> = s.enumOf<Outcome1>(Outcome1);
