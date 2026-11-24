import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The output of a trigger action to run sync sequences */
export type TriggerSequenceRunOutput = {
  /** The id of the triggered sync sequence run. */
  id: string;
};

export const triggerSequenceRunOutputSchema: Schema<TriggerSequenceRunOutput> =
  s.object<TriggerSequenceRunOutput>({
    id: s.string(),
  });
