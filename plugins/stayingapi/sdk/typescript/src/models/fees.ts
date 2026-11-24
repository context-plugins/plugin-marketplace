import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cleaningInternalSchema, cleaningSchema, type Cleaning } from "./unions/cleaning.js";
import { serviceInternalSchema, serviceSchema, type Service } from "./unions/service.js";
import { taxesInternalSchema, taxesSchema, type Taxes } from "./unions/taxes.js";

export type Fees = {
  cleaning: Cleaning;
  service: Service;
  taxes: Taxes;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const feesProperties: s.Shape<Fees> = {
  cleaning: cleaningInternalSchema,
  service: serviceInternalSchema,
  taxes: taxesInternalSchema,
};

export const feesInternalSchema: Schema<Fees> = s.object<Fees>(feesProperties, {
  additionalProperties: s.json(),
});

export const feesSchema: Schema<Fees> = s.lazySchema(() =>
  s.object<Fees>(
    {
      ...feesProperties,
      cleaning: cleaningSchema,
      service: serviceSchema,
      taxes: taxesSchema,
    },
    { additionalProperties: s.json() },
  ),
);
