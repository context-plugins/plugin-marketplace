import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Onboarding = {
  /** @default "not_started" */
  state?: "not_started";
};

export const onboardingSchema: Schema<Onboarding> = s.object<Onboarding>({
  state: s.defaulted(s.literal("not_started"), "not_started"),
});
