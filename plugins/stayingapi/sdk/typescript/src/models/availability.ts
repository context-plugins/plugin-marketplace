import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dateModelInternalSchema, dateModelSchema, type DateModel } from "./date-model.js";
import { platformSchema, type Platform } from "./platform.js";

export type Availability = {
  platform: Platform;
  listingId: string;
  dates: DateModel[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const availabilityProperties: s.Shape<Availability> = {
  platform: platformSchema,
  listingId: s.string(),
  dates: s.array(s.lazy(() => dateModelInternalSchema)),
};

export const availabilityInternalSchema: Schema<Availability> = s.object<Availability>(
  availabilityProperties,
  { additionalProperties: s.json() },
);

export const availabilitySchema: Schema<Availability> = s.lazySchema(() =>
  s.object<Availability>(
    {
      ...availabilityProperties,
      listingId: s.string().check(s.minLength(1)),
      dates: s.array(s.lazy(() => dateModelSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
