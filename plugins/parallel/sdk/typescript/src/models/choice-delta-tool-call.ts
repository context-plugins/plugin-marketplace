import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { functionSchema, type Function } from "./unions/function.js";
import { idSchema, type Id } from "./unions/id.js";
import {
  type1ParallelAiChatApiBetaAndParallelAiExtractApiSchema,
  type Type1ParallelAiChatApiBetaAndParallelAiExtractApi,
} from "./unions/type1-parallel-ai-chat-api-beta-and-parallel-ai-extract-api.js";

export type ChoiceDeltaToolCall = {
  index: number;
  id?: Id;
  function?: Function;
  type?: Type1ParallelAiChatApiBetaAndParallelAiExtractApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const choiceDeltaToolCallSchema: Schema<ChoiceDeltaToolCall> = s.object<ChoiceDeltaToolCall>(
  {
    index: s.int(),
    id: s.optional(s.lazy(() => idSchema)),
    function: s.optional(s.lazy(() => functionSchema)),
    type: s.optional(s.lazy(() => type1ParallelAiChatApiBetaAndParallelAiExtractApiSchema)),
  },
  { additionalProperties: s.json() },
);
