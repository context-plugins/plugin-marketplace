import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  choiceDeltaToolCallFunctionSchema,
  type ChoiceDeltaToolCallFunction,
} from "../choice-delta-tool-call-function.js";

export type Function = ChoiceDeltaToolCallFunction;

export const functionSchema: Schema<Function> = s.of<Function>(
  s.union([s.lazy(() => choiceDeltaToolCallFunctionSchema)]),
);
