import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OperatorType = {
  Text: "TEXT",
  Double: "DOUBLE",
  Date: "DATE",
  User: "USER",
} as const;
export type OperatorType = (typeof OperatorType)[keyof typeof OperatorType] | (string & {});

export const operatorTypeSchema: EnumSchema<OperatorType> = s.enumOf<OperatorType>(OperatorType);
