import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ActionOutput = {
  /** The type of action for this stage */
  kind: string;
  instructions: Record<string, unknown>[];
};

export const actionOutputSchema: Schema<ActionOutput> = s.object<ActionOutput>({
  kind: s.string(),
  instructions: s.array(s.record(s.string(), s.unknown())),
});
