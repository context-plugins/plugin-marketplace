import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Reserved for future use. */
export const SseType = {
  SseEbs: "sse-ebs",
  SseKms: "sse-kms",
  None: "none",
} as const;
export type SseType = (typeof SseType)[keyof typeof SseType] | (string & {});

export const sseTypeSchema: EnumSchema<SseType> = s.enumOf<SseType>(SseType);
