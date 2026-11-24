import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { carDetailsSchema, type CarDetails } from "./car-details.js";
import { travelDetailsSchema, type TravelDetails } from "./travel-details.js";

/** Information about insurance */
export type PolicyDetails = {
  /** Insurance policy type */
  insuranceType: string;
  /** ISO 8601 start date, e.g. 2018-10-17 */
  insuranceStartDt: string;
  /** ISO 8601 end date, e.g. 2018-10-17 */
  insuranceEndDt: string;
  /** Amount of insurance policy */
  insuredAmount: string;
  /** Required for car insurance */
  carDetails?: CarDetails;
  /** Required for travel insurance */
  travelDetails?: TravelDetails;
  /** If insurance can be cancelled/refunded - true, otherwise - false */
  refundable?: boolean;
  providerName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const policyDetailsSchema: Schema<PolicyDetails> = s.object<PolicyDetails>(
  {
    insuranceType: s.string(),
    insuranceStartDt: s.string(),
    insuranceEndDt: s.string(),
    insuredAmount: s.string(),
    carDetails: s.optional(s.lazy(() => carDetailsSchema)),
    travelDetails: s.optional(s.lazy(() => travelDetailsSchema)),
    refundable: s.optional(s.boolean()),
    providerName: s.optional(s.string()),
    _keysMap: {
      insuranceType: "insurance_type",
      insuranceStartDt: "insurance_start_dt",
      insuranceEndDt: "insurance_end_dt",
      insuredAmount: "insured_amount",
      carDetails: "car_details",
      travelDetails: "travel_details",
      providerName: "provider_name",
    },
  },
  { additionalProperties: s.json() },
);
