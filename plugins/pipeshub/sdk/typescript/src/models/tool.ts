import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Tool = {
  /** Tool node key in the backing graph store. */
  key?: string;
  name?: string;
  fullName?: string;
  /** Toolset type key the tool belongs to. */
  toolsetName?: string;
  description?: string;
  /**
   * Server-stamped on `GET /agents/{agentKey}`: `true` when the tool's `fullName` is no longer in
   * the runtime tool registry (its `@tool` was removed). Read-only; ignored on create/update
   * bodies. Not stamped on the `GET /agents` list projection.
   */
  deprecated?: boolean;
};

export const toolSchema: Schema<Tool> = s.object<Tool>({
  key: s.optional(s.string()),
  name: s.optional(s.string()),
  fullName: s.optional(s.string()),
  toolsetName: s.optional(s.string()),
  description: s.optional(s.string()),
  deprecated: s.optional(s.boolean()),
  _keysMap: {
    key: "_key",
  },
});
