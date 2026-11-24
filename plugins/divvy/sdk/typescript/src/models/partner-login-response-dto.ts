import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Login response. */
export type PartnerLoginResponseDto = {
  /**
   * API session ID. Use this value in all subsequent API calls to confirm that you are in a
   * signed-in session.
   */
  sessionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const partnerLoginResponseDtoSchema: Schema<PartnerLoginResponseDto> =
  s.object<PartnerLoginResponseDto>(
    {
      sessionId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
