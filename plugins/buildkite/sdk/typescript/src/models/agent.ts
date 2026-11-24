import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { connectionStateSchema, type ConnectionState } from "./connection-state.js";

export type Agent = {
  id?: string;
  name?: string;
  connectionState?: ConnectionState;
  hostname?: string;
  ipAddress?: string;
  userAgent?: string;
  version?: string;
  metaData?: string[];
  clusterId?: string;
  queue?: string;
  createdAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const agentSchema: Schema<Agent> = s.object<Agent>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    connectionState: s.optional(s.lazy(() => connectionStateSchema)),
    hostname: s.optional(s.string()),
    ipAddress: s.optional(s.string()),
    userAgent: s.optional(s.string()),
    version: s.optional(s.string()),
    metaData: s.optional(s.array(s.string())),
    clusterId: s.optional(s.string()),
    queue: s.optional(s.string()),
    createdAt: s.optional(s.dateTime()),
    _keysMap: {
      connectionState: "connection_state",
      ipAddress: "ip_address",
      userAgent: "user_agent",
      metaData: "meta_data",
      clusterId: "cluster_id",
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
