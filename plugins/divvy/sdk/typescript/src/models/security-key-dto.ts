import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Security key used for signing outgoing messages. */
export type SecurityKeyDto = {
  /** BILL-generated security key */
  securityKey?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const securityKeyDtoSchema: Schema<SecurityKeyDto> = s.object<SecurityKeyDto>(
  {
    securityKey: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
