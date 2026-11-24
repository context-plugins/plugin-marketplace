import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AgreementSlimDto = {
  cloudUrl?: string;
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const agreementSlimDtoSchema: Schema<AgreementSlimDto> = s.object<AgreementSlimDto>(
  {
    cloudUrl: s.optional(s.string()),
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
