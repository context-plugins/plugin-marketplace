import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ClassType = {
  Homeroom: "homeroom",
  Scheduled: "scheduled",
} as const;
export type ClassType = (typeof ClassType)[keyof typeof ClassType] | (string & {});

export const classTypeSchema: EnumSchema<ClassType> = s.enumOf<ClassType>(ClassType);
