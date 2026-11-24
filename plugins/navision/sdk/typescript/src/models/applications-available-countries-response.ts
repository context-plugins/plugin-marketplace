import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { valueSchema, type Value } from "./value.js";

export type ApplicationsAvailableCountriesResponse = {
  value?: Value[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const applicationsAvailableCountriesResponseSchema: Schema<ApplicationsAvailableCountriesResponse> =
  s.object<ApplicationsAvailableCountriesResponse>(
    {
      value: s.optional(s.array(s.lazy(() => valueSchema))),
    },
    { additionalProperties: s.json() },
  );
