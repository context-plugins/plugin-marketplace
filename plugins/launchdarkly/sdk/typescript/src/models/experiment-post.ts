import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { iterationInputSchema, type IterationInput } from "./iteration-input.js";

export type ExperimentPost = {
  /** The experiment name */
  name: string;
  /** The experiment description */
  description?: string;
  /** The ID of the member who maintains this experiment */
  maintainerId?: string;
  /** The experiment key */
  key: string;
  iteration: IterationInput;
  /** The ID of the holdout */
  holdoutId?: string;
  /** Tags for the experiment */
  tags?: string[];
};

export const experimentPostSchema: Schema<ExperimentPost> = s.object<ExperimentPost>({
  name: s.string(),
  description: s.optional(s.string()),
  maintainerId: s.optional(s.string()),
  key: s.string(),
  iteration: iterationInputSchema,
  holdoutId: s.optional(s.string()),
  tags: s.optional(s.array(s.string())),
});
