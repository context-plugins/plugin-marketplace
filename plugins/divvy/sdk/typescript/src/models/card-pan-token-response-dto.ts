import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Card PAN token response. */
export type CardPanTokenResponseDto = {
  /** PAN JWT token */
  token?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cardPanTokenResponseDtoSchema: Schema<CardPanTokenResponseDto> =
  s.object<CardPanTokenResponseDto>(
    {
      token: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
