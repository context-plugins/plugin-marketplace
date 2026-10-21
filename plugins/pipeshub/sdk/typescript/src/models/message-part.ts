import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status1Schema, type Status1 } from "./status1.js";
import { type1Schema, type Type1 } from "./type1.js";

/**
 * One entry in the ordered agent-activity transcript for a message turn. Every field beyond `type`
 * is optional and depends on the part kind, and `sub_agent` nests this same shape recursively under
 * `parts`.
 *
 * Tool results here are always a bounded preview, never the full payload — `artifactId` points at
 * the complete result.
 */
export type MessagePart = {
  type?: Type1;
  content?: string;
  toolCallId?: string;
  toolName?: string;
  displayName?: string;
  args?: string;
  /** Human-readable summary of `args`, computed server-side. */
  argsSummary?: string;
  status?: Status1;
  resultPreview?: string;
  /**
   * Human-readable summary of the tool result, computed server-side from the full untruncated
   * output.
   */
  resultSummary?: string;
  /** Blob-backed artifact id for the full tool result. */
  artifactId?: string;
  runId?: string;
  roleName?: string;
  /**
   * Set on the single root-level `text` part carrying the answer. Every other root `text` part is
   * an abandoned preamble turn. Never set on child parts nested under a `sub_agent`.
   */
  isFinal?: boolean;
  /** Nested transcript of a `sub_agent` part. */
  parts?: MessagePart[];
};

export const messagePartSchema: Schema<MessagePart> = s.object<MessagePart>({
  type: s.optional(s.lazy(() => type1Schema)),
  content: s.optional(s.string()),
  toolCallId: s.optional(s.string()),
  toolName: s.optional(s.string()),
  displayName: s.optional(s.string()),
  args: s.optional(s.string()),
  argsSummary: s.optional(s.string()),
  status: s.optional(s.lazy(() => status1Schema)),
  resultPreview: s.optional(s.string()),
  resultSummary: s.optional(s.string()),
  artifactId: s.optional(s.string()),
  runId: s.optional(s.string()),
  roleName: s.optional(s.string()),
  isFinal: s.optional(s.boolean()),
  parts: s.optional(s.array(s.lazy(() => messagePartSchema))),
});
