import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** DTO representing card values relevant to the current budget period. */
export type CardCurrentPeriodDto = {
  /** Card spend limit for the current budget period */
  limit?: number;
  /** Amount spent with the card for the current budget period */
  spent?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cardCurrentPeriodDtoSchema: Schema<CardCurrentPeriodDto> = s.object<CardCurrentPeriodDto>(
  {
    limit: s.optional(s.float64()),
    spent: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
