import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PublicApiOnboardingStateDto = {
  Queued: "queued",
  Processing: "processing",
  Completed: "completed",
  Failed: "failed",
  Cancelled: "cancelled",
} as const;
export type PublicApiOnboardingStateDto =
  | (typeof PublicApiOnboardingStateDto)[keyof typeof PublicApiOnboardingStateDto]
  | (string & {});

export const publicApiOnboardingStateDtoSchema: EnumSchema<PublicApiOnboardingStateDto> =
  s.enumOf<PublicApiOnboardingStateDto>(PublicApiOnboardingStateDto);
