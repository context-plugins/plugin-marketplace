import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { phoneTypeSchema, type PhoneType } from "./phone-type.js";

/** Add a phone number for risk verification */
export type PhoneVerificationRequestDto = {
  /** Phone number */
  phoneNumber: string;
  phoneType: PhoneType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const phoneVerificationRequestDtoProperties: s.Shape<PhoneVerificationRequestDto> = {
  phoneNumber: s.string(),
  phoneType: phoneTypeSchema,
};

export const phoneVerificationRequestDtoInternalSchema: Schema<PhoneVerificationRequestDto> =
  s.object<PhoneVerificationRequestDto>(phoneVerificationRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const phoneVerificationRequestDtoSchema: Schema<PhoneVerificationRequestDto> = s.lazySchema(() =>
  s.object<PhoneVerificationRequestDto>(
    {
      ...phoneVerificationRequestDtoProperties,
      phoneNumber: s.string().check(s.pattern("(\\d{10}$)")),
    },
    { additionalProperties: s.json() },
  ),
);
