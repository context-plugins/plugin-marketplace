import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { moneyInternalSchema, moneySchema, type Money } from "./money.js";
import {
  serviceDoiTPerfectScaleForCommitmentsGcpApiSchema,
  type ServiceDoiTPerfectScaleForCommitmentsGcpApi,
} from "./service-doi-tperfect-scale-for-commitments-gcp-api.js";

/** Trailing 30-day aggregate metrics for one product line. */
export type GcpStats30DByService = {
  /**
   * Effective Savings Rate (ESR) over the last 30 days, as a fraction from 0 to 1 (for example,
   * `0.187` is 18.7%). Measures what share of eligible spend is saved through active commitments
   * compared with equivalent on-demand cost. Higher ESR means greater realized savings. Null when
   * not yet available.
   */
  esr?: number | null;
  /** Total savings realized over the last 30 days from active commitments (USD). */
  savings?: Money;
  /** Product line these metrics belong to. */
  service: ServiceDoiTPerfectScaleForCommitmentsGcpApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const gcpStats30DByServiceProperties: s.Shape<GcpStats30DByService> = {
  esr: s.optionalNullable(s.float64()),
  savings: s.optional(s.lazy(() => moneyInternalSchema)),
  service: serviceDoiTPerfectScaleForCommitmentsGcpApiSchema,
};

export const gcpStats30DByServiceInternalSchema: Schema<GcpStats30DByService> =
  s.object<GcpStats30DByService>(gcpStats30DByServiceProperties, { additionalProperties: s.json() });

export const gcpStats30DByServiceSchema: Schema<GcpStats30DByService> = s.lazySchema(() =>
  s.object<GcpStats30DByService>(
    {
      ...gcpStats30DByServiceProperties,
      savings: s.optional(s.lazy(() => moneySchema)),
    },
    { additionalProperties: s.json() },
  ),
);
