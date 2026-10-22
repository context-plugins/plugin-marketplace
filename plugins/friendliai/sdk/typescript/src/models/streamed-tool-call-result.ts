import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { streamedFunctionResultSchema, type StreamedFunctionResult } from "./streamed-function-result.js";
import { idSchema, type Id } from "./unions/id.js";

export type StreamedToolCallResult = {
  /** The type of the tool. @default "function" */
  type?: "function";
  /** The ID of the tool call. */
  id?: Id;
  /** The index of the tool call being generated. */
  index: number;
  function: StreamedFunctionResult;
};

export const streamedToolCallResultSchema: Schema<StreamedToolCallResult> = s.object<StreamedToolCallResult>({
  type: s.defaulted(s.literal("function"), "function"),
  id: s.optional(s.lazy(() => idSchema)),
  index: s.int(),
  function: streamedFunctionResultSchema,
});
