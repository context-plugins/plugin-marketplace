import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { result111InternalSchema, result111Schema, type Result111 } from "./unions/result111.js";

export type ChatGptMonitorResponse2 = {
  success: boolean;
  /**
   * ChatGPT's response data. An array, with one response for each prompt in order, when `prompt` is
   * an array.
   */
  result: Result111;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const chatGptMonitorResponse2Properties: s.Shape<ChatGptMonitorResponse2> = {
  success: s.boolean(),
  result: result111InternalSchema,
};

export const chatGptMonitorResponse2InternalSchema: Schema<ChatGptMonitorResponse2> =
  s.object<ChatGptMonitorResponse2>(chatGptMonitorResponse2Properties, { additionalProperties: s.json() });

export const chatGptMonitorResponse2Schema: Schema<ChatGptMonitorResponse2> = s.lazySchema(() =>
  s.object<ChatGptMonitorResponse2>(
    {
      ...chatGptMonitorResponse2Properties,
      result: result111Schema,
    },
    { additionalProperties: s.json() },
  ),
);
