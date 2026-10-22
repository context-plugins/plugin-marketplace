import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RelationType = {
  Equals: "EQUALS",
  IdEquals: "ID_EQUALS",
  Lt: "LT",
  Gt: "GT",
  NotEquals: "NOT_EQUALS",
} as const;
export type RelationType = (typeof RelationType)[keyof typeof RelationType] | (string & {});

export const relationTypeSchema: EnumSchema<RelationType> = s.enumOf<RelationType>(RelationType);
