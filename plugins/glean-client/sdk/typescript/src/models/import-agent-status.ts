import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Outcome of the import for the target agent. */
export const ImportAgentStatus = {
  Created: "CREATED",
  Updated: "UPDATED",
  DraftPreview: "DRAFT_PREVIEW",
} as const;
export type ImportAgentStatus = (typeof ImportAgentStatus)[keyof typeof ImportAgentStatus] | (string & {});

export const importAgentStatusSchema: EnumSchema<ImportAgentStatus> =
  s.enumOf<ImportAgentStatus>(ImportAgentStatus);
