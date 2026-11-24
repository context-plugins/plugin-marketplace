import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Outcome status (0 = success, 1 = failed) */
export const Status = {
  _0: 0,
  _1: 1,
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (number & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
