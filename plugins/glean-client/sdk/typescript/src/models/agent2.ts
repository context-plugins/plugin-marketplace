import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Name of the agent. */
export const Agent2 = {
  Default: "DEFAULT",
  Gpt: "GPT",
  Universal: "UNIVERSAL",
  Fast: "FAST",
  Advanced: "ADVANCED",
  Auto: "AUTO",
} as const;
export type Agent2 = (typeof Agent2)[keyof typeof Agent2] | (string & {});

export const agent2Schema: EnumSchema<Agent2> = s.enumOf<Agent2>(Agent2);
