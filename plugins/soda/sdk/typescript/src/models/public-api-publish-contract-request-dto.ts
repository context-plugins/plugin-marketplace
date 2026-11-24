import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiPublishContractRequestDto = {
  contents: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiPublishContractRequestDtoSchema: Schema<PublicApiPublishContractRequestDto> =
  s.object<PublicApiPublishContractRequestDto>(
    {
      contents: s.string(),
    },
    { additionalProperties: s.json() },
  );
