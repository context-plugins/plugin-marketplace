import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { conditionalTextSchema, type ConditionalText } from "../conditional-text.js";

export type Instruction = ConditionalText | string;

export const instructionSchema: Schema<Instruction> = s.of<Instruction>(
  s.union([s.lazy(() => conditionalTextSchema), s.string()]),
);
