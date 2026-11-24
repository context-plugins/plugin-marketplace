import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Step-up response. */
export type MfaStepUpResponseDto = {
  /** This field is set as `true` if the current API session is MFA-trusted */
  trusted?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mfaStepUpResponseDtoSchema: Schema<MfaStepUpResponseDto> = s.object<MfaStepUpResponseDto>(
  {
    trusted: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
