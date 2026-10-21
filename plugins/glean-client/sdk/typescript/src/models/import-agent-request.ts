import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { importAgentSyncModeSchema, type ImportAgentSyncMode } from "./import-agent-sync-mode.js";
import { VersionSource, versionSourceSchema } from "./version-source.js";

export type ImportAgentRequest = {
  /**
   * Zip of the agent folder (spec.yaml, instructions.md, skills/, subagents/) with symlinks
   * dereferenced.
   */
  bundle: Uint8Array;
  /** Optional Git commit SHA to associate with this import. */
  gitCommitSha?: string;
  /** Optional VCS commit author ID to associate with this import. */
  gitAuthorId?: string;
  /** Optional commit message for the imported version. */
  commitMessage?: string;
  /**
   * Whether the imported version is staged (saved without updating the live version) or published
   * directly to the live version.
   */
  syncMode?: ImportAgentSyncMode;
  /**
   * Provenance recorded on the staged commit or published version this import produces. Doesn't
   * change the agent's management mode (workflowSource). GIT: synced from a Git repository. USER:
   * uploaded by a user. Defaults to USER when omitted. Ignored for transient imports.
   *
   * @default VersionSource.User
   */
  versionSource?: VersionSource;
  /**
   * Optional baseline hash of the currently published agent definition. When publish hash
   * validation is enabled, an import updating an existing agent with syncMode PUBLISHED is rejected
   * with HTTP 409 if the current published definition hash is nonempty and does not match this
   * baseline. Leading and trailing whitespace is trimmed; omitted or blank values skip validation.
   * Ignored for STAGED imports, new agents, and transient previews.
   */
  publishedBaselineHash?: string;
  /**
   * Deprecated. Draft mutation semantics are not supported for transient previews. Use transient
   * and parentWorkflowId instead.
   */
  isDraft?: boolean;
};

export const importAgentRequestSchema: Schema<ImportAgentRequest> = s.object<ImportAgentRequest>({
  bundle: s.bytes(),
  gitCommitSha: s.optional(s.string()),
  gitAuthorId: s.optional(s.string()),
  commitMessage: s.optional(s.string()),
  syncMode: s.optional(s.lazy(() => importAgentSyncModeSchema)),
  versionSource: s.defaulted(versionSourceSchema, VersionSource.User),
  publishedBaselineHash: s.optional(s.string()),
  isDraft: s.optional(s.boolean()),
});
