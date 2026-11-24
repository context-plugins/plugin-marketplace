import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  publicApiOnboardingStateDtoSchema,
  type PublicApiOnboardingStateDto,
} from "./public-api-onboarding-state-dto.js";

export type PublicApiOnboardDatasetsStatusResponse = {
  ended?: Date;
  id: string;
  message?: string;
  started?: Date;
  state: PublicApiOnboardingStateDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiOnboardDatasetsStatusResponseSchema: Schema<PublicApiOnboardDatasetsStatusResponse> =
  s.object<PublicApiOnboardDatasetsStatusResponse>(
    {
      ended: s.optional(s.dateTime()),
      id: s.string(),
      message: s.optional(s.string()),
      started: s.optional(s.dateTime()),
      state: publicApiOnboardingStateDtoSchema,
    },
    { additionalProperties: s.json() },
  );
