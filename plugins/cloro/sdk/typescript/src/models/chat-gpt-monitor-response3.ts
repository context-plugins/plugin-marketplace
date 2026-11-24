import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { result111InternalSchema, result111Schema, type Result111 } from "./unions/result111.js";

export type ChatGptMonitorResponse3 = {
  success: boolean;
  /**
   * ChatGPT's response data. An array, with one response for each prompt in order, when `prompt` is
   * an array.
   */
  result: Result111;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const chatGptMonitorResponse3Properties: s.Shape<ChatGptMonitorResponse3> = {
  success: s.boolean(),
  result: result111InternalSchema,
};

export const chatGptMonitorResponse3InternalSchema: Schema<ChatGptMonitorResponse3> =
  s.object<ChatGptMonitorResponse3>(chatGptMonitorResponse3Properties, { additionalProperties: s.json() });

export const chatGptMonitorResponse3Schema: Schema<ChatGptMonitorResponse3> = s.lazySchema(() =>
  s.object<ChatGptMonitorResponse3>(
    {
      ...chatGptMonitorResponse3Properties,
      result: result111Schema,
    },
    { additionalProperties: s.json() },
  ),
);
