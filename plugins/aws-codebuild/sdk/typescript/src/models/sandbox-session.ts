import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { logsLocationSchema, type LogsLocation } from "./logs-location.js";
import { networkInterfaceSchema, type NetworkInterface } from "./network-interface.js";
import { sandboxSessionPhaseSchema, type SandboxSessionPhase } from "./sandbox-session-phase.js";

export type SandboxSession = {
  /** The ID of the sandbox session. */
  id?: string;
  /** The status of the sandbox session. */
  status?: string;
  /** When the sandbox session started, expressed in Unix time format. */
  startTime?: Date;
  /** When the sandbox session ended, expressed in Unix time format. */
  endTime?: Date;
  /** The current phase for the sandbox. */
  currentPhase?: string;
  /** An array of SandboxSessionPhase objects. */
  phases?: SandboxSessionPhase[];
  /** An identifier for the version of this sandbox's source code. */
  resolvedSourceVersion?: string;
  logs?: LogsLocation;
  networkInterface?: NetworkInterface;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sandboxSessionSchema: Schema<SandboxSession> = s.object<SandboxSession>(
  {
    id: s.optional(s.string()),
    status: s.optional(s.string()),
    startTime: s.optional(s.dateTime()),
    endTime: s.optional(s.dateTime()),
    currentPhase: s.optional(s.string()),
    phases: s.optional(s.array(s.lazy(() => sandboxSessionPhaseSchema))),
    resolvedSourceVersion: s.optional(s.string()),
    logs: s.optional(s.lazy(() => logsLocationSchema)),
    networkInterface: s.optional(s.lazy(() => networkInterfaceSchema)),
  },
  { additionalProperties: s.json() },
);
