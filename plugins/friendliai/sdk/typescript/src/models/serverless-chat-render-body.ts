import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chatTemplateKwargsSchema, type ChatTemplateKwargs } from "./unions/chat-template-kwargs.js";
import { messageSchema, type Message } from "./unions/message.js";
import { toolsSchema, type Tools } from "./unions/tools.js";

export type ServerlessChatRenderBody = {
  /**
   * Code of the model to use. See [available model
   * list](https://friendli.ai/docs/guides/model-apis/pricing#billing-methods).
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

export const serverlessChatRenderBodySchema: Schema<ServerlessChatRenderBody> =
  s.object<ServerlessChatRenderBody>({
    model: s.string(),
    messages: s.array(s.lazy(() => messageSchema)),
    chatTemplateKwargs: s.optional(s.lazy(() => chatTemplateKwargsSchema)),
    tools: s.optional(s.lazy(() => toolsSchema)),
    _keysMap: {
      chatTemplateKwargs: "chat_template_kwargs",
    },
  });
