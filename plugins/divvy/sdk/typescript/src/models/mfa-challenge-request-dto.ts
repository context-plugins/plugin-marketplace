import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Generate MFA challenge */
export type MfaChallengeRequestDto = {
  /**
   * Set as `false` to generate the token with the primary device. The default value is `false`.
   *
   * @deprecated
   */
  useBackup?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mfaChallengeRequestDtoSchema: Schema<MfaChallengeRequestDto> = s.object<MfaChallengeRequestDto>(
  {
    useBackup: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
