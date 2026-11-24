import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countryCode2Schema, type CountryCode2 } from "./country-code2.js";
import { include5Schema, type Include5 } from "./include5.js";
import { stateParameterSchema, type StateParameter } from "./state-parameter.js";

export type ChatGptMonitorRequest = {
  /** The prompt to send to ChatGPT */
  prompt: string;
  /** Country/region code for localized response, using ISO 3166-1 alpha-2 country codes. */
  country: CountryCode2;
  /** Optional flags for including additional response formats */
  include?: Include5;
  /**
   * Serve ChatGPT's legacy desktop interface instead of the default mobile-web one. The legacy
   * interface streams the answer as an event stream, so `result.model`, `result.searchQueries` and
   * `result.mapSearchQueries` are populated. Best-effort and temporary: OpenAI controls which
   * interface it serves and can retire the legacy one at any time, so a request can still come back
   * in the mobile-web shape. Handle both. Defaults to false.
   *
   * @default false
   */
  legacy?: boolean;
  /**
   * Do not force ChatGPT's web search. cloro returns the answer ChatGPT gives on its own, which
   * uses web search only when ChatGPT decides to, so `result.sources`, `result.citationPills` and
   * `result.searchQueries` are often empty. Defaults to false: web search is forced on every
   * request.
   *
   * @default false
   */
  disableWebSearch?: boolean;
  /**
   * State code for sub-country geo-targeting (e.g., "CA"). Only valid with country "US". Paid
   * add-on: +2 credits, on top of the base cost and any other add-on
   * ([pricing](/guides/providers#state-level-targeting)).
   */
  state?: StateParameter;
};

const chatGptMonitorRequestProperties: s.Shape<ChatGptMonitorRequest> = {
  prompt: s.string(),
  country: countryCode2Schema,
  include: s.optional(s.lazy(() => include5Schema)),
  legacy: s.defaulted(s.boolean(), false),
  disableWebSearch: s.defaulted(s.boolean(), false),
  state: s.optional(s.lazy(() => stateParameterSchema)),
};

export const chatGptMonitorRequestInternalSchema: Schema<ChatGptMonitorRequest> =
  s.object<ChatGptMonitorRequest>(chatGptMonitorRequestProperties);

export const chatGptMonitorRequestSchema: Schema<ChatGptMonitorRequest> = s.lazySchema(() =>
  s.object<ChatGptMonitorRequest>({
    ...chatGptMonitorRequestProperties,
    prompt: s.string().check(s.minLength(1), s.maxLength(10000)),
  }),
);
