import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { operator1Schema, type Operator1 } from "./unions/operator1.js";

/** A condition to be met for a transform to be applied to the value of a tool parameter. */
export type ToolParameterTransformCondition = {
  /** The name of the parameter to check. */
  key: string;
  /** The value to check against the parameter. */
  value: string;
  /** The operator to use for the comparison. Currently only supports "eq" */
  operator?: Operator1;
};

export const toolParameterTransformConditionSchema: Schema<ToolParameterTransformCondition> =
  s.object<ToolParameterTransformCondition>({
    key: s.string(),
    value: s.string(),
    operator: s.optional(s.lazy(() => operator1Schema)),
  });
