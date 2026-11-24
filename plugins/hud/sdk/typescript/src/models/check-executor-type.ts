import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Execution mechanisms supported by a check definition. */
export const CheckExecutorType = {
  Deterministic: "deterministic",
  ScenarioAgent: "scenario_agent",
} as const;
export type CheckExecutorType = (typeof CheckExecutorType)[keyof typeof CheckExecutorType] | (string & {});

export const checkExecutorTypeSchema: EnumSchema<CheckExecutorType> =
  s.enumOf<CheckExecutorType>(CheckExecutorType);
