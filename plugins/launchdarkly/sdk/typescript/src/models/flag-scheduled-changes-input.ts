import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlagScheduledChangesInput = {
  /** Optional comment describing the update to the scheduled changes */
  comment?: string;
  instructions: Record<string, unknown>[];
};

export const flagScheduledChangesInputSchema: Schema<FlagScheduledChangesInput> =
  s.object<FlagScheduledChangesInput>({
    comment: s.optional(s.string()),
    instructions: s.array(s.record(s.string(), s.unknown())),
  });
