import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A resource that depends on this AI Config */
export type AiConfigDependency = {
  /** The type of the dependent resource @default "agent-graph" */
  type?: "agent-graph";
  /** The key of the dependent resource */
  key: string;
};

export const aiConfigDependencySchema: Schema<AiConfigDependency> = s.object<AiConfigDependency>({
  type: s.defaulted(s.literal("agent-graph"), "agent-graph"),
  key: s.string(),
});
