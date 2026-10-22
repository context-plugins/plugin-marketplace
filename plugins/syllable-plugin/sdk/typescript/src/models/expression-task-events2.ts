import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { start2Schema, type Start2 } from "./unions/start2.js";
import { submitSchema, type Submit } from "./unions/submit.js";

/** Actions to execute when the configured events occur. */
export type ExpressionTaskEvents2 = {
  /** Actions to execute on the first input from the user. */
  start?: Start2;
  /** Actions to execute when the tool/step is submitted by the LLM. */
  submit?: Submit;
};

export const expressionTaskEvents2Schema: Schema<ExpressionTaskEvents2> = s.object<ExpressionTaskEvents2>({
  start: s.optional(s.lazy(() => start2Schema)),
  submit: s.optional(s.lazy(() => submitSchema)),
});
