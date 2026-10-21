import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReleasePolicyStage = {
  allocation: number;
  durationMillis: number;
};

export const releasePolicyStageSchema: Schema<ReleasePolicyStage> = s.object<ReleasePolicyStage>({
  allocation: s.int(),
  durationMillis: s.int(),
});
