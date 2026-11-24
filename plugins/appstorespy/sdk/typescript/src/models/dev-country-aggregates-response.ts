import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { detailedErrorSchema, type DetailedError } from "./detailed-error.js";
import { devCountryAggregateSchema, type DevCountryAggregate } from "./dev-country-aggregate.js";

export type DevCountryAggregatesResponse = {
  data?: DevCountryAggregate[];
  errors?: DetailedError[];
  /** @default 0 */
  totalCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const devCountryAggregatesResponseSchema: Schema<DevCountryAggregatesResponse> =
  s.object<DevCountryAggregatesResponse>(
    {
      data: s.optional(s.array(s.lazy(() => devCountryAggregateSchema))),
      errors: s.optional(s.array(s.lazy(() => detailedErrorSchema))),
      totalCount: s.defaulted(s.int(), 0),
      _keysMap: {
        totalCount: "total_count",
      },
    },
    { additionalProperties: s.json() },
  );
