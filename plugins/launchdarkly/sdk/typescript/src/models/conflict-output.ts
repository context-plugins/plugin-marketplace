import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConflictOutput = {
  /** The stage ID */
  stageId: string;
  /** Message about the conflict */
  message: string;
};

export const conflictOutputSchema: Schema<ConflictOutput> = s.object<ConflictOutput>({
  stageId: s.string(),
  message: s.string(),
});
