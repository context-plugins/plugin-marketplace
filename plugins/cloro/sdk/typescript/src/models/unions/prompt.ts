import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The prompt to send to ChatGPT, or an array of up to 5 prompts for a multi-turn conversation. With
 * an array, ChatGPT answers the prompts in order, in the same conversation, and `result` is an
 * array with one response for each prompt. Each prompt after the first costs +1 credit
 * ([pricing](/guides/providers#chatgpt-additional-features)).
 */
export type Prompt = string | string[];

export const promptInternalSchema: Schema<Prompt> = s.of<Prompt>(s.union([s.string(), s.array(s.string())]));

export const promptSchema: Schema<Prompt> = s.lazySchema(() =>
  s.of<Prompt>(
    s.union([
      s.string().check(s.minLength(1), s.maxLength(10000)),
      s.array(s.string().check(s.minLength(1), s.maxLength(10000))).check(s.minLength(1), s.maxLength(5)),
    ]),
  ),
);
