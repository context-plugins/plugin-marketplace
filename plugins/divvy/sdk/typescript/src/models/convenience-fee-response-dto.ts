import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** DTO for convenience fee in invoice responses. */
export type ConvenienceFeeResponseDto = {
  /** Convenience fee percentage */
  percentage?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const convenienceFeeResponseDtoSchema: Schema<ConvenienceFeeResponseDto> =
  s.object<ConvenienceFeeResponseDto>(
    {
      percentage: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
