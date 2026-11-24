import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { result6InternalSchema, result6Schema, type Result6 } from "./result6.js";

export type ChatGptMonitorResponse = {
  success: boolean;
  /** ChatGPT's response data */
  result: Result6;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const chatGptMonitorResponseProperties: s.Shape<ChatGptMonitorResponse> = {
  success: s.boolean(),
  result: result6InternalSchema,
};

export const chatGptMonitorResponseInternalSchema: Schema<ChatGptMonitorResponse> =
  s.object<ChatGptMonitorResponse>(chatGptMonitorResponseProperties, { additionalProperties: s.json() });

export const chatGptMonitorResponseSchema: Schema<ChatGptMonitorResponse> = s.lazySchema(() =>
  s.object<ChatGptMonitorResponse>(
    {
      ...chatGptMonitorResponseProperties,
      result: result6Schema,
    },
    { additionalProperties: s.json() },
  ),
);
