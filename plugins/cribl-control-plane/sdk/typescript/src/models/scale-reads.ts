import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Which nodes read commands should be sent to */
export const ScaleReads = {
  Master: "master",
  Replica: "replica",
  All: "all",
} as const;
export type ScaleReads = (typeof ScaleReads)[keyof typeof ScaleReads] | (string & {});

export const scaleReadsSchema: EnumSchema<ScaleReads> = s.enumOf<ScaleReads>(ScaleReads);
