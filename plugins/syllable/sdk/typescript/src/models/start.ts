import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Controls when the workflow activation lifecycle runs. `auto` activates at session start; `manual`
 * activates on first invocation.
 */
export const Start = {
  Auto: "auto",
  Manual: "manual",
} as const;
export type Start = (typeof Start)[keyof typeof Start] | (string & {});

export const startSchema: EnumSchema<Start> = s.enumOf<Start>(Start);
