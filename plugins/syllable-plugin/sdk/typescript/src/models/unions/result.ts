import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { callResultSchema, type CallResult } from "../call-result.js";

/**
 * Optional deterministic result-capture configuration. When present, selected fields from the tool
 * response are saved into workflow state, so later transitions/conditions/validations can branch on
 * them without the model re-deriving them from tool call history. Currently applied only when the
 * call is routed in inject mode (arguments already complete); hinted/routed calls are not yet
 * supported.
 */
export type Result = CallResult;

export const resultSchema: Schema<Result> = s.of<Result>(s.union([s.lazy(() => callResultSchema)]));
