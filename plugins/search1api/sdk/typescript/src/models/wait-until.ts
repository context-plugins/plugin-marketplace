import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WaitUntil = {
  Domcontentloaded: "domcontentloaded",
  Load: "load",
  Networkidle: "networkidle",
} as const;
export type WaitUntil = (typeof WaitUntil)[keyof typeof WaitUntil] | (string & {});

export const waitUntilSchema: EnumSchema<WaitUntil> = s.enumOf<WaitUntil>(WaitUntil);
