import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { samplingBoostSchema, type SamplingBoost } from "./sampling-boost.js";

export type SamplingTargetDocument = {
  /** The name of the sampling rule. */
  ruleName?: string;
  /** The percentage of matching requests to instrument, after the reservoir is exhausted. */
  fixedRate?: number;
  /** The number of requests per second that X-Ray allocated for this service. */
  reservoirQuota?: number;
  /** When the reservoir quota expires. */
  reservoirQuotaTtl?: Date;
  /** The number of seconds for the service to wait before getting sampling targets again. */
  interval?: number;
  samplingBoost?: SamplingBoost;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const samplingTargetDocumentSchema: Schema<SamplingTargetDocument> = s.object<SamplingTargetDocument>(
  {
    ruleName: s.optional(s.string()),
    fixedRate: s.optional(s.float64()),
    reservoirQuota: s.optional(s.int()),
    reservoirQuotaTtl: s.optional(s.dateTime()),
    interval: s.optional(s.int()),
    samplingBoost: s.optional(s.lazy(() => samplingBoostSchema)),
    _keysMap: {
      ruleName: "RuleName",
      fixedRate: "FixedRate",
      reservoirQuota: "ReservoirQuota",
      reservoirQuotaTtl: "ReservoirQuotaTTL",
      interval: "Interval",
      samplingBoost: "SamplingBoost",
    },
  },
  { additionalProperties: s.json() },
);
