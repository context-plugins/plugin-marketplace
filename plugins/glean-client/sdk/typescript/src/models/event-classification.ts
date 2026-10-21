import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventClassificationNameSchema, type EventClassificationName } from "./event-classification-name.js";
import { eventStrategyNameSchema, type EventStrategyName } from "./event-strategy-name.js";

/** A generated classification of a given event. */
export type EventClassification = {
  /** The name for a generated classification of an event. */
  name?: EventClassificationName;
  strategies?: EventStrategyName[];
};

export const eventClassificationSchema: Schema<EventClassification> = s.object<EventClassification>({
  name: s.optional(s.lazy(() => eventClassificationNameSchema)),
  strategies: s.optional(s.array(s.lazy(() => eventStrategyNameSchema))),
});
