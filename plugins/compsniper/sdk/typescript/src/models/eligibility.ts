import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { requirementSchema, type Requirement } from "./requirement.js";
import {
  statusCompSniperMarketplaceAndShippingShippingRatesApiSchema,
  type StatusCompSniperMarketplaceAndShippingShippingRatesApi,
} from "./status-comp-sniper-marketplace-and-shipping-shipping-rates-api.js";

export type Eligibility = {
  status: StatusCompSniperMarketplaceAndShippingShippingRatesApi;
  requirements: Requirement[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eligibilitySchema: Schema<Eligibility> = s.object<Eligibility>(
  {
    status: statusCompSniperMarketplaceAndShippingShippingRatesApiSchema,
    requirements: s.array(s.lazy(() => requirementSchema)),
  },
  { additionalProperties: s.json() },
);
