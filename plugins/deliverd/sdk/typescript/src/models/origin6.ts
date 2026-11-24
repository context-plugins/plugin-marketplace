import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** suggested when you proposed moving this into a side task and the person agreed */
export const Origin6 = {
  Manual: "manual",
  Suggested: "suggested",
} as const;
export type Origin6 = (typeof Origin6)[keyof typeof Origin6] | (string & {});

export const origin6Schema: EnumSchema<Origin6> = s.enumOf<Origin6>(Origin6);
