import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { streamedChatChoiceSchema, type StreamedChatChoice } from "./streamed-chat-choice.js";
import { modelSchema, type Model } from "./unions/model.js";
import { usage1Schema, type Usage1 } from "./unions/usage1.js";

export type StreamedChatData = {
  /** A unique ID of the chat completion. */
  id: string;
  usage?: Usage1;
  /**
   * The object type, which is always set to `chat.completion.chunk`.
   *
   * @default "chat.completion.chunk"
   */
  object?: "chat.completion.chunk";
  choices: StreamedChatChoice[];
  /** The Unix timestamp (in seconds) for when the token is sampled. */
  created: number;
  /** The model to generate the completion. For dedicated endpoints, it returns the endpoint ID. */
  model?: Model;
};

export const streamedChatDataSchema: Schema<StreamedChatData> = s.object<StreamedChatData>({
  id: s.string(),
  usage: s.optional(s.lazy(() => usage1Schema)),
  object: s.defaulted(s.literal("chat.completion.chunk"), "chat.completion.chunk"),
  choices: s.array(s.lazy(() => streamedChatChoiceSchema)),
  created: s.int(),
  model: s.optional(s.lazy(() => modelSchema)),
});
