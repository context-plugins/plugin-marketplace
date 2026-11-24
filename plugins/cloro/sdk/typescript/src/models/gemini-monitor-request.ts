import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countryCode2Schema, type CountryCode2 } from "./country-code2.js";
import { includeSchema, type Include } from "./include.js";
import { stateParameterSchema, type StateParameter } from "./state-parameter.js";

export type GeminiMonitorRequest = {
  /** The prompt to send to Gemini */
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

const geminiMonitorRequestProperties: s.Shape<GeminiMonitorRequest> = {
  prompt: s.string(),
  country: countryCode2Schema,
  include: s.optional(s.lazy(() => includeSchema)),
  state: s.optional(s.lazy(() => stateParameterSchema)),
};

export const geminiMonitorRequestInternalSchema: Schema<GeminiMonitorRequest> =
  s.object<GeminiMonitorRequest>(geminiMonitorRequestProperties);

export const geminiMonitorRequestSchema: Schema<GeminiMonitorRequest> = s.lazySchema(() =>
  s.object<GeminiMonitorRequest>({
    ...geminiMonitorRequestProperties,
    prompt: s.string().check(s.minLength(1), s.maxLength(10000)),
  }),
);
