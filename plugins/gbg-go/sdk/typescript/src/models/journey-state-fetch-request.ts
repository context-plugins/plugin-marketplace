import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type JourneyStateFetchRequest = {
  /** Journey Instance Id, a unique identifier for a started journey instance. */
  instanceId: string;
  filterKeys?: string[];
};

export const journeyStateFetchRequestSchema: Schema<JourneyStateFetchRequest> =
  s.object<JourneyStateFetchRequest>({
    instanceId: s.string(),
    filterKeys: s.optional(s.array(s.string())),
  });
