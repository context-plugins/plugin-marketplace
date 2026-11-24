import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DateModel = {
  date: string;
  available: boolean;
  minNights: number;
  checkIn: boolean;
  checkOut: boolean;
  bookable: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const dateModelProperties: s.Shape<DateModel> = {
  date: s.string(),
  available: s.boolean(),
  minNights: s.int(),
  checkIn: s.boolean(),
  checkOut: s.boolean(),
  bookable: s.boolean(),
};

export const dateModelInternalSchema: Schema<DateModel> = s.object<DateModel>(dateModelProperties, {
  additionalProperties: s.json(),
});

export const dateModelSchema: Schema<DateModel> = s.lazySchema(() =>
  s.object<DateModel>(
    {
      ...dateModelProperties,
      date: s.string().check(s.pattern("^\\d{4}-\\d{2}-\\d{2}$")),
      minNights: s.int().check(s.gt(0), s.lte(9007199254740991)),
    },
    { additionalProperties: s.json() },
  ),
);
