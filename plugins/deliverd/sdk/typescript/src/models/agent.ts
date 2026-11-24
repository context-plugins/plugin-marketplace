import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type Agent = {
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const agentSchema: Schema<Agent> = s.object<Agent>(
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
  },
  { additionalProperties: s.json() },
);
