import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** API partner login */
export type PartnerLoginRequestDto = {
  /** Application key sent to you by BILL when you create a partner account */
  appKey: string;
  /** Email address used to sign in to your BILL account */
  username: string;
  /** Password used to sign in to your BILL account */
  password: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const partnerLoginRequestDtoSchema: Schema<PartnerLoginRequestDto> = s.object<PartnerLoginRequestDto>(
  {
    appKey: s.string(),
    username: s.string(),
    password: s.string(),
  },
  { additionalProperties: s.json() },
);
