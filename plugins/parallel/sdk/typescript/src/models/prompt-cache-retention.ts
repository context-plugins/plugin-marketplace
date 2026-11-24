import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PromptCacheRetention = {
  InMemory: "in_memory",
  _24H: "24h",
} as const;
export type PromptCacheRetention =
  | (typeof PromptCacheRetention)[keyof typeof PromptCacheRetention]
  | (string & {});

export const promptCacheRetentionSchema: EnumSchema<PromptCacheRetention> =
  s.enumOf<PromptCacheRetention>(PromptCacheRetention);
