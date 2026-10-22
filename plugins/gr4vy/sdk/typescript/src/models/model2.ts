import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The report model type. */
export const Model2 = {
  DetailedSettlement: "detailed_settlement",
} as const;
export type Model2 = (typeof Model2)[keyof typeof Model2] | (string & {});

export const model2Schema: EnumSchema<Model2> = s.enumOf<Model2>(Model2);
