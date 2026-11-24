import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Source attribution for the started jobs */
export const Source1 = {
  Manual: "Manual",
  Schedule: "Schedule",
  Queue: "Queue",
} as const;
export type Source1 = (typeof Source1)[keyof typeof Source1] | (string & {});

export const source1Schema: EnumSchema<Source1> = s.enumOf<Source1>(Source1);
