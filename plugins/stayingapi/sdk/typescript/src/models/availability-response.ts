import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { availabilityInternalSchema, availabilitySchema, type Availability } from "./availability.js";
import { metaInternalSchema, metaSchema, type Meta } from "./meta.js";

export type AvailabilityResponse = {
  /** Endpoint-specific data payload. */
  data: Availability[];
  /** Canonical response metadata present on every 200 (§6.3.3). */
  meta: Meta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const availabilityResponseProperties: s.Shape<AvailabilityResponse> = {
  data: s.array(s.lazy(() => availabilityInternalSchema)),
  meta: metaInternalSchema,
};

export const availabilityResponseInternalSchema: Schema<AvailabilityResponse> =
  s.object<AvailabilityResponse>(availabilityResponseProperties, { additionalProperties: s.json() });

export const availabilityResponseSchema: Schema<AvailabilityResponse> = s.lazySchema(() =>
  s.object<AvailabilityResponse>(
    {
      ...availabilityResponseProperties,
      data: s.array(s.lazy(() => availabilitySchema)),
      meta: metaSchema,
    },
    { additionalProperties: s.json() },
  ),
);
