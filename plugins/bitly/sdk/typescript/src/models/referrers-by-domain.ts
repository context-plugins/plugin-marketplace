import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { metricSchema, type Metric } from "./metric.js";

export type ReferrersByDomain = {
  network?: string;
  referrers?: Metric[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const referrersByDomainSchema: Schema<ReferrersByDomain> = s.object<ReferrersByDomain>(
  {
    network: s.optional(s.string()),
    referrers: s.optional(s.array(s.lazy(() => metricSchema))),
  },
  { additionalProperties: s.json() },
);
