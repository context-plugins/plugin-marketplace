import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Extract creates new fields. Reserialize extracts and filters fields, and then reserializes. */
export const OperationMode = {
  Extract: "extract",
  Reserialize: "reserialize",
} as const;
export type OperationMode = (typeof OperationMode)[keyof typeof OperationMode] | (string & {});

export const operationModeSchema: EnumSchema<OperationMode> = s.enumOf<OperationMode>(OperationMode);
