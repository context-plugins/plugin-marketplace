import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cleaningInternalSchema, cleaningSchema, type Cleaning } from "./unions/cleaning.js";
import { serviceInternalSchema, serviceSchema, type Service } from "./unions/service.js";
import { taxesInternalSchema, taxesSchema, type Taxes } from "./unions/taxes.js";

/**
 * DIRECT MODE ONLY, and BEST-EFFORT: fee coverage differs per platform. Airbnb reports cleaning,
 * service and taxes; Booking.com reports taxes only; Vrbo and Google report none (all null).
 * Compare on totalPrice — it is present and comparable on every platform. Never assume a null fee
 * means the platform does not charge it; it means we could not read it.
 */
export type Fees1 = {
  cleaning: Cleaning;
  service: Service;
  taxes: Taxes;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const fees1Properties: s.Shape<Fees1> = {
  cleaning: cleaningInternalSchema,
  service: serviceInternalSchema,
  taxes: taxesInternalSchema,
};

export const fees1InternalSchema: Schema<Fees1> = s.object<Fees1>(fees1Properties, {
  additionalProperties: s.json(),
});

export const fees1Schema: Schema<Fees1> = s.lazySchema(() =>
  s.object<Fees1>(
    {
      ...fees1Properties,
      cleaning: cleaningSchema,
      service: serviceSchema,
      taxes: taxesSchema,
    },
    { additionalProperties: s.json() },
  ),
);
