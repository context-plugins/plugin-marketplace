import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Page readiness condition before capture */
export const WaitUntil = {
  Load: "load",
  Domcontentloaded: "domcontentloaded",
  Networkidle0: "networkidle0",
  Networkidle2: "networkidle2",
} as const;
export type WaitUntil = (typeof WaitUntil)[keyof typeof WaitUntil] | (string & {});

export const waitUntilSchema: EnumSchema<WaitUntil> = s.enumOf<WaitUntil>(WaitUntil);
