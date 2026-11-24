import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countryCode2Schema, type CountryCode2 } from "./country-code2.js";
import { include8Schema, type Include8 } from "./include8.js";
import { stateParameterSchema, type StateParameter } from "./state-parameter.js";
import { promptInternalSchema, promptSchema, type Prompt } from "./unions/prompt.js";

export type ChatGptMonitorRequest2 = {
  /**
   * The prompt to send to ChatGPT, or an array of up to 5 prompts for a multi-turn conversation.
   * With an array, ChatGPT answers the prompts in order, in the same conversation, and `result` is
   * an array with one response for each prompt. Each prompt after the first costs +1 credit
   * ([pricing](/guides/providers#chatgpt-additional-features)).
   */
  prompt: Prompt;
  /** Country/region code for localized response, using ISO 3166-1 alpha-2 country codes. */
  country: CountryCode2;
  /** Optional flags for including additional response formats */
  include?: Include8;
  /**
   * Serve ChatGPT's legacy desktop interface instead of the default mobile-web one. The legacy
   * interface streams the answer as an event stream, so `result.model`, `result.searchQueries` and
   * `result.mapSearchQueries` are populated. ChatGPT shows ads far more often on this interface.
   * Best-effort and temporary: OpenAI controls which interface it serves and can retire the legacy
   * one at any time, so a request can still come back in the mobile-web shape. Handle both.
   * Defaults to false.
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

const chatGptMonitorRequest2Properties: s.Shape<ChatGptMonitorRequest2> = {
  prompt: promptInternalSchema,
  country: countryCode2Schema,
  include: s.optional(s.lazy(() => include8Schema)),
  legacy: s.defaulted(s.boolean(), false),
  disableWebSearch: s.defaulted(s.boolean(), false),
  state: s.optional(s.lazy(() => stateParameterSchema)),
};

export const chatGptMonitorRequest2InternalSchema: Schema<ChatGptMonitorRequest2> =
  s.object<ChatGptMonitorRequest2>(chatGptMonitorRequest2Properties);

export const chatGptMonitorRequest2Schema: Schema<ChatGptMonitorRequest2> = s.lazySchema(() =>
  s.object<ChatGptMonitorRequest2>({
    ...chatGptMonitorRequest2Properties,
    prompt: promptSchema,
  }),
);
