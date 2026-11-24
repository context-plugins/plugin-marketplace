import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RecentGate = {
  id: string;
  action: string;
  decision: string;
  outcome: string | null;
  createdAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recentGateSchema: Schema<RecentGate> = s.object<RecentGate>(
  {
    id: s.string(),
    action: s.string(),
    decision: s.string(),
    outcome: s.nullable(s.string()),
    createdAt: s.string(),
  },
  { additionalProperties: s.json() },
);
