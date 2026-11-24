import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countryCode2Schema, type CountryCode2 } from "./country-code2.js";
import { include2Schema, type Include2 } from "./include2.js";
import { stateParameterSchema, type StateParameter } from "./state-parameter.js";

export type CopilotMonitorRequest = {
  /** The prompt to send to Copilot */
  prompt: string;
  /** Country/region code for localized response, using ISO 3166-1 alpha-2 country codes. */
  country: CountryCode2;
  /** Optional flags for including additional response formats */
  include?: Include2;
  /**
   * State code for sub-country geo-targeting (e.g., "CA"). Only valid with country "US". Paid
   * add-on: +2 credits, on top of the base cost and any other add-on
   * ([pricing](/guides/providers#state-level-targeting)).
   */
  state?: StateParameter;
};

const copilotMonitorRequestProperties: s.Shape<CopilotMonitorRequest> = {
  prompt: s.string(),
  country: countryCode2Schema,
  include: s.optional(s.lazy(() => include2Schema)),
  state: s.optional(s.lazy(() => stateParameterSchema)),
};

export const copilotMonitorRequestInternalSchema: Schema<CopilotMonitorRequest> =
  s.object<CopilotMonitorRequest>(copilotMonitorRequestProperties);

export const copilotMonitorRequestSchema: Schema<CopilotMonitorRequest> = s.lazySchema(() =>
  s.object<CopilotMonitorRequest>({
    ...copilotMonitorRequestProperties,
    prompt: s.string().check(s.minLength(1), s.maxLength(10000)),
  }),
);
