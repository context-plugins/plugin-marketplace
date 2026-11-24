import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Create a payment term */
export type CreatePaymentTermRequestDto = {
  /** Payment term name. Examples include `Net 30` and `Due upon receipt`. */
  name: string;
  /** Number of days until payment is due */
  daysDue: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createPaymentTermRequestDtoProperties: s.Shape<CreatePaymentTermRequestDto> = {
  name: s.string(),
  daysDue: s.int(),
};

export const createPaymentTermRequestDtoInternalSchema: Schema<CreatePaymentTermRequestDto> =
  s.object<CreatePaymentTermRequestDto>(createPaymentTermRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const createPaymentTermRequestDtoSchema: Schema<CreatePaymentTermRequestDto> = s.lazySchema(() =>
  s.object<CreatePaymentTermRequestDto>(
    {
      ...createPaymentTermRequestDtoProperties,
      name: s.string().check(s.minLength(1)),
      daysDue: s.int().check(s.gte(0), s.lte(999)),
    },
    { additionalProperties: s.json() },
  ),
);
