import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dimensionInternalSchema, dimensionSchema, type Dimension } from "./dimension.js";

export type CompaniesApiDimensionsResponse = {
  value?: Dimension[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companiesApiDimensionsResponseProperties: s.Shape<CompaniesApiDimensionsResponse> = {
  value: s.optional(s.array(s.lazy(() => dimensionInternalSchema))),
};

export const companiesApiDimensionsResponseInternalSchema: Schema<CompaniesApiDimensionsResponse> =
  s.object<CompaniesApiDimensionsResponse>(companiesApiDimensionsResponseProperties, {
    additionalProperties: s.json(),
  });

export const companiesApiDimensionsResponseSchema: Schema<CompaniesApiDimensionsResponse> = s.lazySchema(() =>
  s.object<CompaniesApiDimensionsResponse>(
    {
      ...companiesApiDimensionsResponseProperties,
      value: s.optional(s.array(s.lazy(() => dimensionSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
