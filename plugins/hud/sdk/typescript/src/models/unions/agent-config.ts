import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type AgentConfig = Record<string, unknown>;

export const agentConfigSchema: Schema<AgentConfig> = s.of<AgentConfig>(
  s.union([s.record(s.string(), s.unknown())]),
);
