import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Onboarding2 = {
  /** @default "completed" */
  state?: "completed";
  completedAt?: string;
  courseId?: string;
};

export const onboarding2Schema: Schema<Onboarding2> = s.object<Onboarding2>({
  state: s.defaulted(s.literal("completed"), "completed"),
  completedAt: s.optional(s.string()),
  courseId: s.optional(s.string()),
});
