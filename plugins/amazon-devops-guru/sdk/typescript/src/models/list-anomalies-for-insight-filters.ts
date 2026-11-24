import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { serviceCollectionSchema, type ServiceCollection } from "./service-collection.js";

export type ListAnomaliesForInsightFilters = {
  serviceCollection?: ServiceCollection;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listAnomaliesForInsightFiltersSchema: Schema<ListAnomaliesForInsightFilters> =
  s.object<ListAnomaliesForInsightFilters>(
    {
      serviceCollection: s.optional(s.lazy(() => serviceCollectionSchema)),
      _keysMap: {
        serviceCollection: "ServiceCollection",
      },
    },
    { additionalProperties: s.json() },
  );
