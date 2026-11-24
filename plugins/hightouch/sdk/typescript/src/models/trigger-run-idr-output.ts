import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TriggerRunIdrOutput = {
  /** The id of the triggered run. */
  id: string;
};

export const triggerRunIdrOutputSchema: Schema<TriggerRunIdrOutput> = s.object<TriggerRunIdrOutput>({
  id: s.string(),
});
