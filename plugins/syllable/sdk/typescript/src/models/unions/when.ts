import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  toolParameterTransformConditionSchema,
  type ToolParameterTransformCondition,
} from "../tool-parameter-transform-condition.js";

/** Only apply the transform if the condition is met. */
export type When = ToolParameterTransformCondition;

export const whenSchema: Schema<When> = s.of<When>(
  s.union([s.lazy(() => toolParameterTransformConditionSchema)]),
);
