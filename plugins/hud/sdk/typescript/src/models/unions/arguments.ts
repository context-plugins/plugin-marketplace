import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { promptArgumentSchema, type PromptArgument } from "../prompt-argument.js";

export type Arguments = PromptArgument[];

export const argumentsSchema: Schema<Arguments> = s.of<Arguments>(
  s.union([s.array(s.lazy(() => promptArgumentSchema))]),
);
