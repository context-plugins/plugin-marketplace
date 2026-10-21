import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reasoningEffortEnumSchema, type ReasoningEffortEnum } from "./reasoning-effort-enum.js";

/** Available reasoning effort levels for this model. */
export type ReasoningEffortOption = {
  /** @default "effort" */
  type?: "effort";
  values: ReasoningEffortEnum[];
};

export const reasoningEffortOptionSchema: Schema<ReasoningEffortOption> = s.object<ReasoningEffortOption>({
  type: s.defaulted(s.literal("effort"), "effort"),
  values: s.array(s.lazy(() => reasoningEffortEnumSchema)),
});
