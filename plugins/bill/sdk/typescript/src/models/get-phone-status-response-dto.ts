import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Get phone status response. */
export type GetPhoneStatusResponseDto = {
  /** Set as `true` if the user has an existing phone number for risk verification */
  hasPhone?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getPhoneStatusResponseDtoSchema: Schema<GetPhoneStatusResponseDto> =
  s.object<GetPhoneStatusResponseDto>(
    {
      hasPhone: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
