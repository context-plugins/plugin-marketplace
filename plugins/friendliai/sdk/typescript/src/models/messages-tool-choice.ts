import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type2Schema, type Type2 } from "./type2.js";
import {
  disableParallelToolUseSchema,
  type DisableParallelToolUse,
} from "./unions/disable-parallel-tool-use.js";
import { name5Schema, type Name5 } from "./unions/name5.js";

export type MessagesToolChoice = {
  /**
   * Tool-calling mode. `auto` lets the model decide, `any` requires at least one tool call, `tool`
   * forces a named tool, and `none` disables tool calls.
   */
  type: Type2;
  /** Tool name to force when `type=tool`. Ignored for other `type` values. */
  name?: Name5;
  /**
   * If true, restricts the model to at most one tool call at a time. Must not be provided when
   * `type=none`.
   */
  disableParallelToolUse?: DisableParallelToolUse;
};

export const messagesToolChoiceSchema: Schema<MessagesToolChoice> = s.object<MessagesToolChoice>({
  type: type2Schema,
  name: s.optional(s.lazy(() => name5Schema)),
  disableParallelToolUse: s.optional(s.lazy(() => disableParallelToolUseSchema)),
  _keysMap: {
    disableParallelToolUse: "disable_parallel_tool_use",
  },
});
