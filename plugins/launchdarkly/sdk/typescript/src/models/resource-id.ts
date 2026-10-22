import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResourceId = {
  /** The environment key */
  environmentKey?: string;
  /**
   * Deprecated, use <code>key</code> instead
   *
   * @deprecated
   */
  flagKey?: string;
  /** The key of the flag or segment */
  key?: string;
  kind?: string;
  /** The project key */
  projectKey?: string;
};

export const resourceIdSchema: Schema<ResourceId> = s.object<ResourceId>({
  environmentKey: s.optional(s.string()),
  flagKey: s.optional(s.string()),
  key: s.optional(s.string()),
  kind: s.optional(s.string()),
  projectKey: s.optional(s.string()),
});
