import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Target tense. Only used with mapping="switch_tense". */
export const TenseMapping = {
  SimplePast: "simple past",
  PastPerfect: "past perfect",
  PastContinuous: "past continuous",
  PastPerfectContinuous: "past perfect continuous",
  SimplePresent: "simple present",
  PresentPerfect: "present perfect",
  PresentContinuous: "present continuous",
  PresentPerfectContinuous: "present perfect continuous",
  SimpleFuture: "simple future",
  FuturePerfect: "future perfect",
  FutureContinuous: "future continuous",
  FuturePerfectContinuous: "future perfect continuous",
} as const;
export type TenseMapping = (typeof TenseMapping)[keyof typeof TenseMapping] | (string & {});

export const tenseMappingSchema: EnumSchema<TenseMapping> = s.enumOf<TenseMapping>(TenseMapping);
