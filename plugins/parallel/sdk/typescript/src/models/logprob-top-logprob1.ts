import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { logprob1Schema, type Logprob1 } from "./unions/logprob1.js";
import { tokenSchema, type Token } from "./unions/token.js";

export type LogprobTopLogprob1 = {
  token?: Token;
  logprob?: Logprob1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const logprobTopLogprob1Schema: Schema<LogprobTopLogprob1> = s.object<LogprobTopLogprob1>(
  {
    token: s.optional(s.lazy(() => tokenSchema)),
    logprob: s.optional(s.lazy(() => logprob1Schema)),
  },
  { additionalProperties: s.json() },
);
