import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { personSchema, type Person } from "./person.js";

export type WorkflowMetadata = {
  author?: Person;
  /** Server Unix timestamp of the creation time. */
  createTimestamp?: number;
  /** Server Unix timestamp of the last update time. */
  lastUpdateTimestamp?: number;
  /** Server Unix timestamp of the last time the draft was saved. */
  lastDraftSavedAt?: number;
  lastDraftSavedBy?: Person;
  /**
   * ID of the VCS user (e.g. GitHub username) who last saved the draft. Set only by the draft save
   * path via the external Git integration API.
   */
  lastDraftGitAuthorId?: string;
  lastUpdatedBy?: Person;
};

export const workflowMetadataSchema: Schema<WorkflowMetadata> = s.object<WorkflowMetadata>({
  author: s.optional(s.lazy(() => personSchema)),
  createTimestamp: s.optional(s.int()),
  lastUpdateTimestamp: s.optional(s.int()),
  lastDraftSavedAt: s.optional(s.int()),
  lastDraftSavedBy: s.optional(s.lazy(() => personSchema)),
  lastDraftGitAuthorId: s.optional(s.string()),
  lastUpdatedBy: s.optional(s.lazy(() => personSchema)),
});
