import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { logprobTopLogprobSchema, type LogprobTopLogprob } from "./logprob-top-logprob.js";

/** The log probability of a token. */
export type Logprob = {
  token: string;
  bytes: number[];
  logprob: number;
  topLogprobs: LogprobTopLogprob[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const logprobSchema: Schema<Logprob> = s.object<Logprob>(
  {
    token: s.string(),
    bytes: s.array(s.int()),
    logprob: s.float64(),
    topLogprobs: s.array(s.lazy(() => logprobTopLogprobSchema)),
    _keysMap: {
      topLogprobs: "top_logprobs",
    },
  },
  { additionalProperties: s.json() },
);
