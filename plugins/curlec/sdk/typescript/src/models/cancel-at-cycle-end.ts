import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 1 = cancel at end of current cycle; 0 = cancel immediately. */
export const CancelAtCycleEnd = {
  _0: 0,
  _1: 1,
} as const;
export type CancelAtCycleEnd = (typeof CancelAtCycleEnd)[keyof typeof CancelAtCycleEnd] | (number & {});

export const cancelAtCycleEndSchema: EnumSchema<CancelAtCycleEnd> =
  s.enumOf<CancelAtCycleEnd>(CancelAtCycleEnd);
