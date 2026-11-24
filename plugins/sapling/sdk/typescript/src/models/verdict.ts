import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Plain-language summary: mixed when part of the text scores as AI (ai_fraction >= 0.2) or the
 * overall score is >= 0.5 with less than 80% of the text scoring as AI. Absent if the text could
 * not be scored.
 */
export const Verdict = {
  Human: "human",
  Mixed: "mixed",
  Ai: "ai",
} as const;
export type Verdict = (typeof Verdict)[keyof typeof Verdict] | (string & {});

export const verdictSchema: EnumSchema<Verdict> = s.enumOf<Verdict>(Verdict);
