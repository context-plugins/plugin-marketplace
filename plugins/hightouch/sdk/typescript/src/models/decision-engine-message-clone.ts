import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request body for cloning a Decision Engine message */
export type DecisionEngineMessageClone = {
  /** Name for the copy. Defaults to "Copy of <source message name>". */
  name?: string;
};

export const decisionEngineMessageCloneSchema: Schema<DecisionEngineMessageClone> =
  s.object<DecisionEngineMessageClone>({
    name: s.optional(s.string()),
  });
