import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Where a result's verdict comes from. */
export const QaResultSource = {
  Analysis: "analysis",
  Skipped: "skipped",
  Manual: "manual",
} as const;
export type QaResultSource = (typeof QaResultSource)[keyof typeof QaResultSource] | (string & {});

export const qaResultSourceSchema: EnumSchema<QaResultSource> = s.enumOf<QaResultSource>(QaResultSource);
