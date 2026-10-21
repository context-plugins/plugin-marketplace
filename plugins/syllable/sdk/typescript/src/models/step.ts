import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { inputParameterSchema, type InputParameter } from "./input-parameter.js";
import { stepEventActions2Schema, type StepEventActions2 } from "./step-event-actions2.js";
import { stepTools2Schema, type StepTools2 } from "./step-tools2.js";
import { instructionSchema, type Instruction } from "./unions/instruction.js";
import { nextSchema, type Next } from "./unions/next.js";

export type Step = {
  /** The unique identifier of the step. */
  id: string;
  /** The goal of the step. */
  goal: string;
  /** The instructions for the step. */
  instructions?: Instruction[];
  /** The tools configuration for the step. */
  tools?: StepTools2;
  /** The inputs for the step. */
  inputs?: InputParameter[];
  /** The events that trigger the actions to be executed. */
  on?: StepEventActions2;
  /** The next steps to execute. */
  next?: Next[];
};

export const stepSchema: Schema<Step> = s.object<Step>({
  id: s.string(),
  goal: s.string(),
  instructions: s.optional(s.array(s.lazy(() => instructionSchema))),
  tools: s.optional(s.lazy(() => stepTools2Schema)),
  inputs: s.optional(s.array(s.lazy(() => inputParameterSchema))),
  on: s.optional(s.lazy(() => stepEventActions2Schema)),
  next: s.optional(s.array(s.lazy(() => nextSchema))),
});
