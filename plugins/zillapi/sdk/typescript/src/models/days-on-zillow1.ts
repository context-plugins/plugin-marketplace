import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DaysOnZillow1 = {
  _1: "1",
  _7: "7",
  _14: "14",
  _30: "30",
  _90: "90",
  _6M: "6m",
  _12M: "12m",
  _24M: "24m",
  _36M: "36m",
} as const;
export type DaysOnZillow1 = (typeof DaysOnZillow1)[keyof typeof DaysOnZillow1] | (string & {});

export const daysOnZillow1Schema: EnumSchema<DaysOnZillow1> = s.enumOf<DaysOnZillow1>(DaysOnZillow1);
