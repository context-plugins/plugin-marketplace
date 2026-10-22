import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether the imported version is staged (saved without updating the live version) or published
 * directly to the live version.
 */
export const ImportAgentSyncMode = {
  Staged: "STAGED",
  Published: "PUBLISHED",
} as const;
export type ImportAgentSyncMode =
  | (typeof ImportAgentSyncMode)[keyof typeof ImportAgentSyncMode]
  | (string & {});

export const importAgentSyncModeSchema: EnumSchema<ImportAgentSyncMode> =
  s.enumOf<ImportAgentSyncMode>(ImportAgentSyncMode);
