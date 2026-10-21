import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commitSchema, type Commit } from "./commit.js";

/**
 * Git status of the Worker Group, Outpost Group, or Edge Fleet configuration. Automatically
 * populated and returned in responses.
 */
export type Git = {
  /** Commit hash of the currently committed configuration version. */
  commit?: string;
  /** Number of local configuration changes not yet committed. */
  localChanges?: number;
  /** List of recent configuration commits. */
  log?: Commit[];
};

export const gitSchema: Schema<Git> = s.object<Git>({
  commit: s.optional(s.string()),
  localChanges: s.optional(s.int()),
  log: s.optional(s.array(s.lazy(() => commitSchema))),
});
