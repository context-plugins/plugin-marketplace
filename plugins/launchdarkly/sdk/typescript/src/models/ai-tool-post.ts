import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AiToolPost = {
  key: string;
  maintainerId?: string;
  maintainerTeamKey?: string;
  description?: string;
  /** JSON Schema defining the tool's parameters for LLM consumption */
  schema: Record<string, unknown>;
  /** Custom metadata and configuration for application-level use (not sent to LLM) */
  customParameters?: Record<string, unknown>;
};

export const aiToolPostSchema: Schema<AiToolPost> = s.object<AiToolPost>({
  key: s.string(),
  maintainerId: s.optional(s.string()),
  maintainerTeamKey: s.optional(s.string()),
  description: s.optional(s.string()),
  schema: s.record(s.string(), s.unknown()),
  customParameters: s.optional(s.record(s.string(), s.unknown())),
});
