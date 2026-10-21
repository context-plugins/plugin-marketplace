import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Origin collection of the conversation */
export const Source3 = {
  Assistant: "assistant",
  Agent: "agent",
} as const;
export type Source3 = (typeof Source3)[keyof typeof Source3] | (string & {});

export const source3Schema: EnumSchema<Source3> = s.enumOf<Source3>(Source3);
