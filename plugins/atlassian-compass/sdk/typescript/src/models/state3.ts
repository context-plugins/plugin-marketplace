import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The state of the vulnerability. */
export const State3 = {
  Open: "OPEN",
  Remediated: "REMEDIATED",
  Declined: "DECLINED",
} as const;
export type State3 = (typeof State3)[keyof typeof State3] | (string & {});

export const state3Schema: EnumSchema<State3> = s.enumOf<State3>(State3);
