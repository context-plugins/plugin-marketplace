import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TeamsPatchInput = {
  /** Optional comment describing the update */
  comment?: string;
  instructions: Record<string, unknown>[];
};

export const teamsPatchInputSchema: Schema<TeamsPatchInput> = s.object<TeamsPatchInput>({
  comment: s.optional(s.string()),
  instructions: s.array(s.record(s.string(), s.unknown())),
});
