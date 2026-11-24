import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countryCode2Schema, type CountryCode2 } from "./country-code2.js";
import { includeSchema, type Include } from "./include.js";
import { stateParameterSchema, type StateParameter } from "./state-parameter.js";

export type GrokMonitorRequest = {
  /** The prompt to send to Grok */
  prompt: string;
  /** Country/region code for localized response, using ISO 3166-1 alpha-2 country codes. */
  country: CountryCode2;
  /** Optional flags for including additional response formats */
  include?: Include;
  /**
   * State code for sub-country geo-targeting (e.g., "CA"). Only valid with country "US". Paid
   * add-on: +2 credits, on top of the base cost and any other add-on
   * ([pricing](/guides/providers#state-level-targeting)).
   */
  state?: StateParameter;
};

const grokMonitorRequestProperties: s.Shape<GrokMonitorRequest> = {
  prompt: s.string(),
  country: countryCode2Schema,
  include: s.optional(s.lazy(() => includeSchema)),
  state: s.optional(s.lazy(() => stateParameterSchema)),
};

export const grokMonitorRequestInternalSchema: Schema<GrokMonitorRequest> = s.object<GrokMonitorRequest>(
  grokMonitorRequestProperties,
);

export const grokMonitorRequestSchema: Schema<GrokMonitorRequest> = s.lazySchema(() =>
  s.object<GrokMonitorRequest>({
    ...grokMonitorRequestProperties,
    prompt: s.string().check(s.minLength(1), s.maxLength(10000)),
  }),
);
