import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chatTemplateKwargsSchema, type ChatTemplateKwargs } from "./unions/chat-template-kwargs.js";
import { messageSchema, type Message } from "./unions/message.js";
import { toolsSchema, type Tools } from "./unions/tools.js";

export type DedicatedChatRenderBody = {
  /**
   * ID of target endpoint. If you want to send request to specific adapter, use the format
   * "YOUR_ENDPOINT_ID:YOUR_ADAPTER_ROUTE". Otherwise, you can just use "YOUR_ENDPOINT_ID" alone.
   */
  model: string;
  /** A list of messages comprising the conversation so far. */
  messages: Message[];
  /**
   * Additional keyword arguments supplied to the template renderer. These parameters will be
   * available for use within the chat template.
   */
  chatTemplateKwargs?: ChatTemplateKwargs;
  /**
   * A list of tools the model may call. Use this to provide a list of functions the model may
   * generate JSON inputs for.
   *
   * **When `tools` is specified, `min_tokens` and `response_format` fields are unsupported.**
   */
  tools?: Tools;
};

export const dedicatedChatRenderBodySchema: Schema<DedicatedChatRenderBody> =
  s.object<DedicatedChatRenderBody>({
    model: s.string(),
    messages: s.array(s.lazy(() => messageSchema)),
    chatTemplateKwargs: s.optional(s.lazy(() => chatTemplateKwargsSchema)),
    tools: s.optional(s.lazy(() => toolsSchema)),
    _keysMap: {
      chatTemplateKwargs: "chat_template_kwargs",
    },
  });
