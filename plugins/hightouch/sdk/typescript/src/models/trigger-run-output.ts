import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The output of a trigger action to run syncs */
export type TriggerRunOutput = {
  /**
   * The id of the triggered sync run. This can be passed to `/sync/runs` to get the run's status.
   */
  id: string;
};

export const triggerRunOutputSchema: Schema<TriggerRunOutput> = s.object<TriggerRunOutput>({
  id: s.string(),
});
