import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Match condition model for FindAll ingest. */
export type MatchCondition = {
  /** Name of the match condition. */
  name: string;
  /**
   * Detailed description of the match condition. Include as much specific information as possible
   * to help improve the quality and accuracy of Find All run results.
   */
  description: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const matchConditionSchema: Schema<MatchCondition> = s.object<MatchCondition>(
  {
    name: s.string(),
    description: s.string(),
  },
  { additionalProperties: s.json() },
);
