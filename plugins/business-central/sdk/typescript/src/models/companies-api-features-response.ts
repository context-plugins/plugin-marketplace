import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { featureInternalSchema, featureSchema, type Feature } from "./feature.js";

export type CompaniesApiFeaturesResponse = {
  value?: Feature[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companiesApiFeaturesResponseProperties: s.Shape<CompaniesApiFeaturesResponse> = {
  value: s.optional(s.array(s.lazy(() => featureInternalSchema))),
};

export const companiesApiFeaturesResponseInternalSchema: Schema<CompaniesApiFeaturesResponse> =
  s.object<CompaniesApiFeaturesResponse>(companiesApiFeaturesResponseProperties, {
    additionalProperties: s.json(),
  });

export const companiesApiFeaturesResponseSchema: Schema<CompaniesApiFeaturesResponse> = s.lazySchema(() =>
  s.object<CompaniesApiFeaturesResponse>(
    {
      ...companiesApiFeaturesResponseProperties,
      value: s.optional(s.array(s.lazy(() => featureSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
