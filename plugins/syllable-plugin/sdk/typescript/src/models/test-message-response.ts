import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { responseSchema, type Response } from "./unions/response.js";

/** Response from an agent in a test chat. */
export type TestMessageResponse = {
  /** Channel-manager-side ID of the session (see Session.channel_manager_sid) */
  testId: string;
  /** ID of the agent with which the chat is taking place */
  agentId: string;
  /** The text of the message that elicited the response */
  text?: string;
  /** The response from the agent */
  response: Response;
  /** The text of the response */
  responseText?: string;
};

export const testMessageResponseSchema: Schema<TestMessageResponse> = s.object<TestMessageResponse>({
  testId: s.string(),
  agentId: s.string(),
  text: s.optional(s.string()),
  response: responseSchema,
  responseText: s.optional(s.string()),
  _keysMap: {
    testId: "test_id",
    agentId: "agent_id",
    responseText: "response_text",
  },
});
