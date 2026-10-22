import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { toolAnnotationsSchema, type ToolAnnotations } from "./tool-annotations.js";

export type ToolDefinition = {
  /** Tool server this tool belongs to. */
  serverId: string;
  /** Name to invoke the tool by. */
  name: string;
  /** Human-readable name of the tool. */
  displayName?: string;
  /** What the tool does, as surfaced to a model. */
  description?: string;
  /** JSON Schema for the tool's input parameters. */
  inputSchema?: Record<string, unknown>;
  /**
   * Behavioural hints for the tool, exactly as declared by the tool server. No defaults are filled
   * in — see the per-field notes for what an absent value means.
   *
   * Per the MCP specification, clients MUST treat these hints as untrusted unless the tool server
   * is itself trusted. They are advisory metadata, not an authorization signal, and must not be the
   * sole basis of a security decision.
   */
  annotations?: ToolAnnotations;
};

export const toolDefinitionSchema: Schema<ToolDefinition> = s.object<ToolDefinition>({
  serverId: s.string(),
  name: s.string(),
  displayName: s.optional(s.string()),
  description: s.optional(s.string()),
  inputSchema: s.optional(s.record(s.string(), s.unknown())),
  annotations: s.optional(s.lazy(() => toolAnnotationsSchema)),
});
