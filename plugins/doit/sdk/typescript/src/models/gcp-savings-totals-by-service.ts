import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { moneyInternalSchema, moneySchema, type Money } from "./money.js";
import {
  service2DoiTPerfectScaleForCommitmentsGcpApiSchema,
  type Service2DoiTPerfectScaleForCommitmentsGcpApi,
} from "./service2-doi-tperfect-scale-for-commitments-gcp-api.js";

/** Year-to-date and lifetime realized savings for one product line. */
export type GcpSavingsTotalsByService = {
  /** Year-to-date realized savings. */
  ytd: Money;
  /** Lifetime realized savings since onboarding. */
  lifetime: Money;
  /** Product line these savings totals belong to. */
  service: Service2DoiTPerfectScaleForCommitmentsGcpApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const gcpSavingsTotalsByServiceProperties: s.Shape<GcpSavingsTotalsByService> = {
  ytd: moneyInternalSchema,
  lifetime: moneyInternalSchema,
  service: service2DoiTPerfectScaleForCommitmentsGcpApiSchema,
};

export const gcpSavingsTotalsByServiceInternalSchema: Schema<GcpSavingsTotalsByService> =
  s.object<GcpSavingsTotalsByService>(gcpSavingsTotalsByServiceProperties, {
    additionalProperties: s.json(),
  });

export const gcpSavingsTotalsByServiceSchema: Schema<GcpSavingsTotalsByService> = s.lazySchema(() =>
  s.object<GcpSavingsTotalsByService>(
    {
      ...gcpSavingsTotalsByServiceProperties,
      ytd: moneySchema,
      lifetime: moneySchema,
    },
    { additionalProperties: s.json() },
  ),
);
