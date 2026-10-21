import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FinishReason3 = {
  Stop: "stop",
  Length: "length",
  Null: "null",
} as const;
export type FinishReason3 = (typeof FinishReason3)[keyof typeof FinishReason3] | (string & {});

export const finishReason3Schema: EnumSchema<FinishReason3> = s.enumOf<FinishReason3>(FinishReason3);
