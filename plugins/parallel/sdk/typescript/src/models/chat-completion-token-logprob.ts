import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { topLogprobSchema, type TopLogprob } from "./top-logprob.js";
import { bytesSchema, type Bytes } from "./unions/bytes.js";

export type ChatCompletionTokenLogprob = {
  token: string;
  bytes?: Bytes;
  logprob: number;
  topLogprobs: TopLogprob[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chatCompletionTokenLogprobSchema: Schema<ChatCompletionTokenLogprob> =
  s.object<ChatCompletionTokenLogprob>(
    {
      token: s.string(),
      bytes: s.optional(s.lazy(() => bytesSchema)),
      logprob: s.float64(),
      topLogprobs: s.array(s.lazy(() => topLogprobSchema)),
      _keysMap: {
        topLogprobs: "top_logprobs",
      },
    },
    { additionalProperties: s.json() },
  );
