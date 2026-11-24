import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fieldBasisSchema, type FieldBasis } from "./field-basis.js";
import { betaFieldsSchema, type BetaFields } from "./unions/beta-fields.js";
import { mcpToolCallsSchema, type McpToolCalls } from "./unions/mcp-tool-calls.js";

/** Output from a task that returns text. */
export type TaskRunTextOutput = {
  /** Basis for the output. The basis has a single field 'output'. */
  basis: FieldBasis[];
  /**
   * The type of output being returned, as determined by the output schema of the task spec.
   *
   * @default "text"
   */
  type?: "text";
  /** MCP tool calls made by the task. */
  mcpToolCalls?: McpToolCalls;
  /**
   * Deprecated. mcp-server-2025-07-17 is now included directly in the output (e.g. mcp_tool_calls).
   *
   * @deprecated
   */
  betaFields?: BetaFields;
  /** Text output from the task. */
  content: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskRunTextOutputSchema: Schema<TaskRunTextOutput> = s.object<TaskRunTextOutput>(
  {
    basis: s.array(s.lazy(() => fieldBasisSchema)),
    type: s.defaulted(s.literal("text"), "text"),
    mcpToolCalls: s.optional(s.lazy(() => mcpToolCallsSchema)),
    betaFields: s.optional(s.lazy(() => betaFieldsSchema)),
    content: s.string(),
    _keysMap: {
      mcpToolCalls: "mcp_tool_calls",
      betaFields: "beta_fields",
    },
  },
  { additionalProperties: s.json() },
);
