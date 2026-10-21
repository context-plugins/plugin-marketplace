import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AiConfigTargetingPatch = {
  comment?: string;
  environmentKey: string;
  instructions: Record<string, unknown>[];
};

export const aiConfigTargetingPatchSchema: Schema<AiConfigTargetingPatch> = s.object<AiConfigTargetingPatch>({
  comment: s.optional(s.string()),
  environmentKey: s.string(),
  instructions: s.array(s.record(s.string(), s.unknown())),
});
