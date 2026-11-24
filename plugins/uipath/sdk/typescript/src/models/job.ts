import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { robotRefSchema, type RobotRef } from "./robot-ref.js";
import { sourceSchema, type Source } from "./source.js";
import { stateSchema, type State } from "./state.js";

/** Represents a single automation job execution instance */
export type Job = {
  /** Unique integer identifier for the job */
  id?: number;
  /** Unique GUID key for the job */
  key?: string;
  /** Name of the process (release) that this job executes */
  releaseName?: string;
  /** Version of the process package used in this job */
  processVersion?: string;
  /** Current execution state of the job */
  state?: State;
  /** How the job was initiated */
  source?: Source;
  /** ISO 8601 timestamp when the job started executing */
  startTime?: Date;
  /** ISO 8601 timestamp when the job finished executing */
  endTime?: Date;
  /** ISO 8601 timestamp when the job was created */
  creationTime?: Date;
  /** Additional information or error message associated with the job state */
  info?: string;
  /** Name of the machine where the robot executed the job */
  hostMachineName?: string;
  /** A lightweight reference to a robot associated with a job */
  robot?: RobotRef;
  /** ID of the folder in which this job resides */
  organizationUnitId?: number;
  /** JSON-serialized input arguments passed to the process */
  inputArguments?: string;
  /** JSON-serialized output arguments returned by the process */
  outputArguments?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobSchema: Schema<Job> = s.object<Job>(
  {
    id: s.optional(s.int()),
    key: s.optional(s.string()),
    releaseName: s.optional(s.string()),
    processVersion: s.optional(s.string()),
    state: s.optional(s.lazy(() => stateSchema)),
    source: s.optional(s.lazy(() => sourceSchema)),
    startTime: s.optional(s.dateTime()),
    endTime: s.optional(s.dateTime()),
    creationTime: s.optional(s.dateTime()),
    info: s.optional(s.string()),
    hostMachineName: s.optional(s.string()),
    robot: s.optional(s.lazy(() => robotRefSchema)),
    organizationUnitId: s.optional(s.int()),
    inputArguments: s.optional(s.string()),
    outputArguments: s.optional(s.string()),
    _keysMap: {
      id: "Id",
      key: "Key",
      releaseName: "ReleaseName",
      processVersion: "ProcessVersion",
      state: "State",
      source: "Source",
      startTime: "StartTime",
      endTime: "EndTime",
      creationTime: "CreationTime",
      info: "Info",
      hostMachineName: "HostMachineName",
      robot: "Robot",
      organizationUnitId: "OrganizationUnitId",
      inputArguments: "InputArguments",
      outputArguments: "OutputArguments",
    },
  },
  { additionalProperties: s.json() },
);
