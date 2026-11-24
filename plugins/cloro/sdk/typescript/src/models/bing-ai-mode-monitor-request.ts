import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countryCode13Schema, type CountryCode13 } from "./country-code13.js";
import { include12Schema, type Include12 } from "./include12.js";
import { stateParameterSchema, type StateParameter } from "./state-parameter.js";

export type BingAiModeMonitorRequest = {
  /**
   * The prompt to send to Bing AI Mode. Bing puts the prompt in the page URL, so the limit is 3,500
   * characters after URL encoding. A letter, digit or space counts as 1, most punctuation as 3, an
   * accented or Cyrillic letter as 6, and a Chinese, Japanese or Korean character as 9. Thus a CJK
   * prompt can have a maximum of 388 characters. A longer prompt returns a 400 error: "Prompt is
   * too long (max 3,500 characters, fewer for non-Latin scripts)".
   */
  prompt: string;
  /**
   * Country/region code for localized response, using ISO 3166-1 alpha-2 country codes. Bing AI
   * Mode accepts all countries except KR and RU. `GET /v1/countries?model=bing_aimode` returns the
   * list.
   */
  country: CountryCode13;
  /**
   * State code for sub-country geo-targeting (e.g., "CA"). Only valid with country "US". Paid
   * add-on: +2 credits, on top of the base cost and any other add-on
   * ([pricing](/guides/providers#state-level-targeting)).
   */
  state?: StateParameter;
  /** Optional flags for including additional response formats */
  include?: Include12;
};

const bingAiModeMonitorRequestProperties: s.Shape<BingAiModeMonitorRequest> = {
  prompt: s.string(),
  country: countryCode13Schema,
  state: s.optional(s.lazy(() => stateParameterSchema)),
  include: s.optional(s.lazy(() => include12Schema)),
};

export const bingAiModeMonitorRequestInternalSchema: Schema<BingAiModeMonitorRequest> =
  s.object<BingAiModeMonitorRequest>(bingAiModeMonitorRequestProperties);

export const bingAiModeMonitorRequestSchema: Schema<BingAiModeMonitorRequest> = s.lazySchema(() =>
  s.object<BingAiModeMonitorRequest>({
    ...bingAiModeMonitorRequestProperties,
    prompt: s.string().check(s.minLength(1), s.maxLength(3500)),
  }),
);
