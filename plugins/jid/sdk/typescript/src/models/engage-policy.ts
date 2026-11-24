import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EngagePolicy = {
  Strict: "strict",
  Balanced: "balanced",
  Permissive: "permissive",
} as const;
export type EngagePolicy = (typeof EngagePolicy)[keyof typeof EngagePolicy] | (string & {});

export const engagePolicySchema: EnumSchema<EngagePolicy> = s.enumOf<EngagePolicy>(EngagePolicy);
