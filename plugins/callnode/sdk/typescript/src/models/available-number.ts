import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type3Schema, type Type3 } from "./type3.js";

export type AvailableNumber = {
  /** Plus sign followed by 7–15 digits. */
  phoneNumber?: string;
  type?: Type3;
  city?: string | null;
  /** State/province. */
  region?: string | null;
  rateCenter?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const availableNumberProperties: s.Shape<AvailableNumber> = {
  phoneNumber: s.optional(s.string()),
  type: s.optional(s.lazy(() => type3Schema)),
  city: s.optionalNullable(s.string()),
  region: s.optionalNullable(s.string()),
  rateCenter: s.optionalNullable(s.string()),
};

export const availableNumberInternalSchema: Schema<AvailableNumber> = s.object<AvailableNumber>(
  availableNumberProperties,
  { additionalProperties: s.json() },
);

export const availableNumberSchema: Schema<AvailableNumber> = s.lazySchema(() =>
  s.object<AvailableNumber>(
    {
      ...availableNumberProperties,
      phoneNumber: s.optional(s.string().check(s.pattern("^\\+[1-9]\\d{6,14}$"))),
    },
    { additionalProperties: s.json() },
  ),
);
