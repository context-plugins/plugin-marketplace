import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { inputSchema, type Input } from "./unions/input.js";
import { instructionsSchema, type Instructions } from "./unions/instructions.js";
import { maxOutputTokensSchema, type MaxOutputTokens } from "./unions/max-output-tokens.js";
import { model1Schema, type Model1 } from "./unions/model1.js";
import { parallelToolCalls2Schema, type ParallelToolCalls2 } from "./unions/parallel-tool-calls2.js";
import { reasoning1Schema, type Reasoning1 } from "./unions/reasoning1.js";
import { temperature18Schema, type Temperature18 } from "./unions/temperature18.js";
import { text1Schema, type Text1 } from "./unions/text1.js";
import { toolChoice2Schema, type ToolChoice2 } from "./unions/tool-choice2.js";
import { tools4Schema, type Tools4 } from "./unions/tools4.js";
import { topP16Schema, type TopP16 } from "./unions/top-p16.js";

export type ContainerResponsesStreamBody = {
  /** Text or image inputs to the model, used to generate a response. */
  input: Input;
  /** A system (or developer) message inserted into the model's context. */
  instructions?: Instructions;
  /**
   * An upper bound for the number of tokens that can be generated for a response, including visible
   * output tokens and reasoning tokens.
   */
  maxOutputTokens?: MaxOutputTokens;
  /**
   * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output
   * more random, while lower values like 0.2 will make it more focused and deterministic. We
   * generally recommend altering this or `top_p` but not both.
   */
  temperature?: Temperature18;
  /**
   * An alternative to sampling with temperature, called nucleus sampling, where the model considers
   * the results of the tokens with `top_p` probability mass. So 0.1 means only the tokens
   * comprising the top 10% probability mass are considered. We generally recommend altering this or
   * `temperature` but not both.
   */
  topP?: TopP16;
  /** Whether to allow the model to run tool calls in parallel. */
  parallelToolCalls?: ParallelToolCalls2;
  /**
   * An array of tools the model may call while generating a response. You can specify which tool to
   * use by setting the `tool_choice` parameter.
   */
  tools?: Tools4;
  /**
   * How the model should select which tool (or tools) to use when generating a response. See the
   * `tools` parameter to see how to specify which tools the model can call.
   */
  toolChoice?: ToolChoice2;
  /**
   * Configuration options for a text response from the model. Can be plain text or structured JSON
   * data.
   */
  text?: Text1;
  /** Configuration options for reasoning models. */
  reasoning?: Reasoning1;
  /**
   * Whether to stream the generation result. When set to `true`, the response is sent as
   * [server-sent
   * events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#event_stream_format)
   * once generated.
   *
   * @default true
   */
  stream?: boolean;
  /** Routes the request to a specific adapter. */
  model?: Model1;
};

export const containerResponsesStreamBodySchema: Schema<ContainerResponsesStreamBody> =
  s.object<ContainerResponsesStreamBody>({
    input: inputSchema,
    instructions: s.optional(s.lazy(() => instructionsSchema)),
    maxOutputTokens: s.optional(s.lazy(() => maxOutputTokensSchema)),
    temperature: s.optional(s.lazy(() => temperature18Schema)),
    topP: s.optional(s.lazy(() => topP16Schema)),
    parallelToolCalls: s.optional(s.lazy(() => parallelToolCalls2Schema)),
    tools: s.optional(s.lazy(() => tools4Schema)),
    toolChoice: s.optional(s.lazy(() => toolChoice2Schema)),
    text: s.optional(s.lazy(() => text1Schema)),
    reasoning: s.optional(s.lazy(() => reasoning1Schema)),
    stream: s.defaulted(s.boolean(), true),
    model: s.optional(s.lazy(() => model1Schema)),
    _keysMap: {
      maxOutputTokens: "max_output_tokens",
      topP: "top_p",
      parallelToolCalls: "parallel_tool_calls",
      toolChoice: "tool_choice",
    },
  });
