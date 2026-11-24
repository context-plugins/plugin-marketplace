import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the object. */
export const ObjectType = {
  Alert: "alert",
  Allocation: "allocation",
  Budget: "budget",
  Metric: "metric",
  Report: "report",
  Annotation: "annotation",
} as const;
export type ObjectType = (typeof ObjectType)[keyof typeof ObjectType] | (string & {});

export const objectTypeSchema: EnumSchema<ObjectType> = s.enumOf<ObjectType>(ObjectType);
