import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Update a payment term */
export type UpdatePaymentTermRequestDto = {
  /** Payment term name. Examples include `Net 30` and `Due upon receipt`. */
  name?: string;
  /** Number of days until payment is due */
  daysDue?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updatePaymentTermRequestDtoProperties: s.Shape<UpdatePaymentTermRequestDto> = {
  name: s.optional(s.string()),
  daysDue: s.optional(s.int()),
};

export const updatePaymentTermRequestDtoInternalSchema: Schema<UpdatePaymentTermRequestDto> =
  s.object<UpdatePaymentTermRequestDto>(updatePaymentTermRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const updatePaymentTermRequestDtoSchema: Schema<UpdatePaymentTermRequestDto> = s.lazySchema(() =>
  s.object<UpdatePaymentTermRequestDto>(
    {
      ...updatePaymentTermRequestDtoProperties,
      daysDue: s.optional(s.int().check(s.gte(0), s.lte(999))),
    },
    { additionalProperties: s.json() },
  ),
);
