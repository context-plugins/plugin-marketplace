import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessLevelSchema, type AccessLevel } from "./access-level.js";

/**
 * Entry inside `sharedWith[]`. The schema sets `_id: false` on these sub-docs, so no auto-injected
 * `_id` is present.
 */
export type PersistedSemanticSearchSharedWithEntry = {
  userId: string;
  accessLevel: AccessLevel;
};

export const persistedSemanticSearchSharedWithEntrySchema: Schema<PersistedSemanticSearchSharedWithEntry> =
  s.object<PersistedSemanticSearchSharedWithEntry>({
    userId: s.string(),
    accessLevel: accessLevelSchema,
  });
