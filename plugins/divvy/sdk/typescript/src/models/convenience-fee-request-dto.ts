import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** DTO for convenience fee in invoice requests. */
export type ConvenienceFeeRequestDto = {
  /** Convenience fee percentage */
  percentage?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const convenienceFeeRequestDtoProperties: s.Shape<ConvenienceFeeRequestDto> = {
  percentage: s.optional(s.float64()),
};

export const convenienceFeeRequestDtoInternalSchema: Schema<ConvenienceFeeRequestDto> =
  s.object<ConvenienceFeeRequestDto>(convenienceFeeRequestDtoProperties, { additionalProperties: s.json() });

export const convenienceFeeRequestDtoSchema: Schema<ConvenienceFeeRequestDto> = s.lazySchema(() =>
  s.object<ConvenienceFeeRequestDto>(
    {
      ...convenienceFeeRequestDtoProperties,
      percentage: s.optional(s.float64().check(s.gte(0), s.lte(3))),
    },
    { additionalProperties: s.json() },
  ),
);
