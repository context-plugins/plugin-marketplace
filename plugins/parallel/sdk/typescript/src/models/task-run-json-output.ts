import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fieldBasisSchema, type FieldBasis } from "./field-basis.js";
import { betaFieldsSchema, type BetaFields } from "./unions/beta-fields.js";
import { mcpToolCallsSchema, type McpToolCalls } from "./unions/mcp-tool-calls.js";
import { outputSchemaSchema, type OutputSchema } from "./unions/output-schema.js";

/** Output from a task that returns JSON. */
export type TaskRunJsonOutput = {
  /**
   * Basis for each top-level field in the JSON output. Per-list-element basis entries are available
   * only when the `parallel-beta: field-basis-2025-11-25` header is supplied.
   */
  basis: FieldBasis[];
  /**
   * The type of output being returned, as determined by the output schema of the task spec.
   *
   * @default "json"
   */
  type?: "json";
  /** MCP tool calls made by the task. */
  mcpToolCalls?: McpToolCalls;
  /**
   * Deprecated. mcp-server-2025-07-17 is now included directly in the output (e.g. mcp_tool_calls).
   *
   * @deprecated
   */
  betaFields?: BetaFields;
  /**
   * Output from the task as a native JSON object, as determined by the output schema of the task
   * spec.
   */
  content: Record<string, unknown>;
  /**
   * Output schema for the Task Run. Populated only if the task was executed with an auto schema.
   */
  outputSchema?: OutputSchema;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskRunJsonOutputSchema: Schema<TaskRunJsonOutput> = s.object<TaskRunJsonOutput>(
  {
    basis: s.array(s.lazy(() => fieldBasisSchema)),
    type: s.defaulted(s.literal("json"), "json"),
    mcpToolCalls: s.optional(s.lazy(() => mcpToolCallsSchema)),
    betaFields: s.optional(s.lazy(() => betaFieldsSchema)),
    content: s.record(s.string(), s.unknown()),
    outputSchema: s.optional(s.lazy(() => outputSchemaSchema)),
    _keysMap: {
      mcpToolCalls: "mcp_tool_calls",
      betaFields: "beta_fields",
      outputSchema: "output_schema",
    },
  },
  { additionalProperties: s.json() },
);
