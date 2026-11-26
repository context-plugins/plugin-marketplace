import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  partnerConfigurationOutputInternalSchema,
  partnerConfigurationOutputSchema,
  type PartnerConfigurationOutput,
} from "./partner-configuration-output.js";

export type ListPartnerConfigurationsResponse = {
  results: PartnerConfigurationOutput[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const listPartnerConfigurationsResponseProperties: s.Shape<ListPartnerConfigurationsResponse> = {
  results: s.array(s.lazy(() => partnerConfigurationOutputInternalSchema)),
};

export const listPartnerConfigurationsResponseInternalSchema: Schema<ListPartnerConfigurationsResponse> =
  s.object<ListPartnerConfigurationsResponse>(listPartnerConfigurationsResponseProperties, {
    additionalProperties: s.json(),
  });

export const listPartnerConfigurationsResponseSchema: Schema<ListPartnerConfigurationsResponse> =
  s.lazySchema(() =>
    s.object<ListPartnerConfigurationsResponse>(
      {
        ...listPartnerConfigurationsResponseProperties,
        results: s.array(s.lazy(() => partnerConfigurationOutputSchema)),
      },
      { additionalProperties: s.json() },
    ),
  );
