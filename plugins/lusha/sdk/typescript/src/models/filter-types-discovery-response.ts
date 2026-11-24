import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { availableFilterSchema, type AvailableFilter } from "./available-filter.js";

export type FilterTypesDiscoveryResponse = {
  availableFilters?: AvailableFilter[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filterTypesDiscoveryResponseSchema: Schema<FilterTypesDiscoveryResponse> =
  s.object<FilterTypesDiscoveryResponse>(
    {
      availableFilters: s.optional(s.array(s.lazy(() => availableFilterSchema))),
    },
    { additionalProperties: s.json() },
  );
