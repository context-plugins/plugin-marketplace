import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { onboardingSchema, type Onboarding } from "../onboarding.js";
import { onboarding2Schema, type Onboarding2 } from "../onboarding2.js";

export type Onboarding1 = Onboarding | Onboarding2;

export const onboarding1Schema: Schema<Onboarding1> = s.of<Onboarding1>(
  s.union([s.lazy(() => onboardingSchema), s.lazy(() => onboarding2Schema)]),
);
