import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The top log probability of a token. */
export type LogprobTopLogprob = {
  token: string;
  bytes: number[];
  logprob: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const logprobTopLogprobSchema: Schema<LogprobTopLogprob> = s.object<LogprobTopLogprob>(
  {
    token: s.string(),
    bytes: s.array(s.int()),
    logprob: s.float64(),
  },
  { additionalProperties: s.json() },
);
