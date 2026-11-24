import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WaitUntil1 = {
  Load: "load",
  Domcontentloaded: "domcontentloaded",
  Networkidle0: "networkidle0",
  Networkidle2: "networkidle2",
} as const;
export type WaitUntil1 = (typeof WaitUntil1)[keyof typeof WaitUntil1] | (string & {});

export const waitUntil1Schema: EnumSchema<WaitUntil1> = s.enumOf<WaitUntil1>(WaitUntil1);
