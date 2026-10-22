import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OperationType = {
  Single: "single",
  Bulk: "bulk",
} as const;
export type OperationType = (typeof OperationType)[keyof typeof OperationType] | (string & {});

export const operationTypeSchema: EnumSchema<OperationType> = s.enumOf<OperationType>(OperationType);
