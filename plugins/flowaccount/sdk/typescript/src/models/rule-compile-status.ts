import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 1 = Pending 3 = Execute 5 = Success 7 = Error 9 = WHTWarning 11 = NoMoreCompile 13 = Ignore */
export const RuleCompileStatus = {
  _1: 1,
  _3: 3,
  _5: 5,
  _7: 7,
  _9: 9,
  _11: 11,
  _13: 13,
} as const;
export type RuleCompileStatus = (typeof RuleCompileStatus)[keyof typeof RuleCompileStatus] | (number & {});

export const ruleCompileStatusSchema: EnumSchema<RuleCompileStatus> =
  s.enumOf<RuleCompileStatus>(RuleCompileStatus);
