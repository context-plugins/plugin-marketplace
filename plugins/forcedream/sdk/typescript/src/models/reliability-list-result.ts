import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { agent1Schema, type Agent1 } from "./agent1.js";

export type ReliabilityListResult = {
  agents?: Agent1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reliabilityListResultSchema: Schema<ReliabilityListResult> = s.object<ReliabilityListResult>(
  {
    agents: s.optional(s.array(s.lazy(() => agent1Schema))),
  },
  { additionalProperties: s.json() },
);
