import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformSkillSyncStatusSchema, type PlatformSkillSyncStatus } from "./platform-skill-sync-status.js";

export type PlatformSkillSourceProvenance = {
  /** URL of the external source the skill was imported from. */
  sourceUrl?: string;
  /** Source commit SHA for the imported skill. */
  commitSha?: string;
  /** Time the skill was imported. */
  importedAt?: Date;
  /** Time the skill was last synced from its source. */
  lastSyncedAt?: Date;
  /** Current external-source sync status. */
  syncStatus?: PlatformSkillSyncStatus;
  /** Human-readable sync failure reason, present only when sync_status is SYNC_FAILED. */
  syncError?: string;
};

export const platformSkillSourceProvenanceSchema: Schema<PlatformSkillSourceProvenance> =
  s.object<PlatformSkillSourceProvenance>({
    sourceUrl: s.optional(s.string()),
    commitSha: s.optional(s.string()),
    importedAt: s.optional(s.dateTime()),
    lastSyncedAt: s.optional(s.dateTime()),
    syncStatus: s.optional(s.lazy(() => platformSkillSyncStatusSchema)),
    syncError: s.optional(s.string()),
    _keysMap: {
      sourceUrl: "source_url",
      commitSha: "commit_sha",
      importedAt: "imported_at",
      lastSyncedAt: "last_synced_at",
      syncStatus: "sync_status",
      syncError: "sync_error",
    },
  });
