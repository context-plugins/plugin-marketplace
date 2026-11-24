import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ToolDefinitions = Record<string, unknown>[];

export const toolDefinitionsInternalSchema: Schema<ToolDefinitions> = s.of<ToolDefinitions>(
  s.union([s.array(s.record(s.string(), s.unknown()))]),
);

export const toolDefinitionsSchema: Schema<ToolDefinitions> = s.lazySchema(() =>
  s.of<ToolDefinitions>(s.union([s.array(s.record(s.string(), s.unknown())).check(s.maxLength(1000))])),
);
