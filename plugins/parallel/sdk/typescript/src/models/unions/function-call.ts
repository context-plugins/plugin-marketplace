import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  choiceDeltaFunctionCallSchema,
  type ChoiceDeltaFunctionCall,
} from "../choice-delta-function-call.js";

export type FunctionCall = ChoiceDeltaFunctionCall;

export const functionCallSchema: Schema<FunctionCall> = s.of<FunctionCall>(
  s.union([s.lazy(() => choiceDeltaFunctionCallSchema)]),
);
