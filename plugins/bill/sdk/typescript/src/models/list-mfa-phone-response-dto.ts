import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mfaPhoneResponseDtoSchema, type MfaPhoneResponseDto } from "./mfa-phone-response-dto.js";

/** List type for MFA Phones list. */
export type ListMfaPhoneResponseDto = {
  results?: MfaPhoneResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listMfaPhoneResponseDtoSchema: Schema<ListMfaPhoneResponseDto> =
  s.object<ListMfaPhoneResponseDto>(
    {
      results: s.optional(s.array(s.lazy(() => mfaPhoneResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
