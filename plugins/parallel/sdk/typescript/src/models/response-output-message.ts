import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { responseOutputTextSchema, type ResponseOutputText } from "./response-output-text.js";
import {
  statusParallelAiResponsesApiSchema,
  type StatusParallelAiResponsesApi,
} from "./status-parallel-ai-responses-api.js";
import { phase1Schema, type Phase1 } from "./unions/phase1.js";

/** An assistant message produced by the model. */
export type ResponseOutputMessage = {
  id: string;
  content: ResponseOutputText[];
  /** @default "assistant" */
  role?: "assistant";
  status: StatusParallelAiResponsesApi;
  /** @default "message" */
  type?: "message";
  phase?: Phase1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseOutputMessageSchema: Schema<ResponseOutputMessage> = s.object<ResponseOutputMessage>(
  {
    id: s.string(),
    content: s.array(s.lazy(() => responseOutputTextSchema)),
    role: s.defaulted(s.literal("assistant"), "assistant"),
    status: statusParallelAiResponsesApiSchema,
    type: s.defaulted(s.literal("message"), "message"),
    phase: s.optional(s.lazy(() => phase1Schema)),
  },
  { additionalProperties: s.json() },
);
