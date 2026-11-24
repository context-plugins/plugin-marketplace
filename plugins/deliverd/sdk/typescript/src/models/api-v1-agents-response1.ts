import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { recentGateSchema, type RecentGate } from "./recent-gate.js";
import { statusSchema, type Status } from "./status.js";

export type ApiV1AgentsResponse1 = {
  id: string;
  name: string;
  description: string | null;
  provider: string;
  platform: string;
  providerAgentId: string | null;
  environment: string | null;
  status: Status;
  registeredVia: string;
  createdAt: string;
  recentGates: RecentGate[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1AgentsResponse1Schema: Schema<ApiV1AgentsResponse1> = s.object<ApiV1AgentsResponse1>(
  {
    id: s.string(),
    name: s.string(),
    description: s.nullable(s.string()),
    provider: s.string(),
    platform: s.string(),
    providerAgentId: s.nullable(s.string()),
    environment: s.nullable(s.string()),
    status: statusSchema,
    registeredVia: s.string(),
    createdAt: s.string(),
    recentGates: s.array(s.lazy(() => recentGateSchema)),
  },
  { additionalProperties: s.json() },
);
