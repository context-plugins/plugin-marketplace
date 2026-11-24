import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiVerifyContractRequestDto = {
  checkPaths?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiVerifyContractRequestDtoSchema: Schema<PublicApiVerifyContractRequestDto> =
  s.object<PublicApiVerifyContractRequestDto>(
    {
      checkPaths: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
