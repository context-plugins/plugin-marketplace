import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AiToolPatch = {
  maintainerId?: string;
  maintainerTeamKey?: string;
  description?: string;
  /** JSON Schema defining the tool's parameters for LLM consumption */
  schema?: Record<string, unknown>;
  /** Custom metadata and configuration for application-level use (not sent to LLM) */
  customParameters?: Record<string, unknown>;
};

export const aiToolPatchSchema: Schema<AiToolPatch> = s.object<AiToolPatch>({
  maintainerId: s.optional(s.string()),
  maintainerTeamKey: s.optional(s.string()),
  description: s.optional(s.string()),
  schema: s.optional(s.record(s.string(), s.unknown())),
  customParameters: s.optional(s.record(s.string(), s.unknown())),
});
