import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PatchFlagsRequest = {
  /** Optional comment describing the change */
  comment?: string;
  /** The instructions to perform when updating */
  instructions: Record<string, unknown>[];
};

export const patchFlagsRequestSchema: Schema<PatchFlagsRequest> = s.object<PatchFlagsRequest>({
  comment: s.optional(s.string()),
  instructions: s.array(s.record(s.string(), s.unknown())),
});
