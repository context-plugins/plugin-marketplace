import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Runner = {
  /** The resource class the runner belongs to in namespace/name format */
  resourceClass?: string;
  /** The hostname of the machine running the runner agent */
  hostname?: string;
  /** The name assigned to the runner */
  name?: string;
  /** When the runner first connected to CircleCI */
  firstConnected?: Date;
  /** When the runner last connected to CircleCI */
  lastConnected?: Date;
  /** When the runner last executed a task */
  lastUsed?: Date;
  /** The version of the runner agent */
  version?: string;
  /** The IP address of the runner */
  ip?: string;
  /** The operating system of the runner */
  os?: string;
  /** The CPU architecture of the runner */
  arch?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runnerSchema: Schema<Runner> = s.object<Runner>(
  {
    resourceClass: s.optional(s.string()),
    hostname: s.optional(s.string()),
    name: s.optional(s.string()),
    firstConnected: s.optional(s.dateTime()),
    lastConnected: s.optional(s.dateTime()),
    lastUsed: s.optional(s.dateTime()),
    version: s.optional(s.string()),
    ip: s.optional(s.string()),
    os: s.optional(s.string()),
    arch: s.optional(s.string()),
    _keysMap: {
      resourceClass: "resource_class",
      firstConnected: "first_connected",
      lastConnected: "last_connected",
      lastUsed: "last_used",
    },
  },
  { additionalProperties: s.json() },
);
