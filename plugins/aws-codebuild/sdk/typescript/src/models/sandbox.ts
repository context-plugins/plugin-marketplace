import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { logsConfigSchema, type LogsConfig } from "./logs-config.js";
import { projectEnvironmentSchema, type ProjectEnvironment } from "./project-environment.js";
import {
  projectFileSystemLocationSchema,
  type ProjectFileSystemLocation,
} from "./project-file-system-location.js";
import { projectSourceVersionSchema, type ProjectSourceVersion } from "./project-source-version.js";
import { projectSourceSchema, type ProjectSource } from "./project-source.js";
import { sandboxSessionSchema, type SandboxSession } from "./sandbox-session.js";
import { vpcConfigSchema, type VpcConfig } from "./vpc-config.js";

export type Sandbox = {
  /** The ID of the sandbox. */
  id?: string;
  /** The ARN of the sandbox. */
  arn?: string;
  /** The CodeBuild project name. */
  projectName?: string;
  /** When the sandbox process was initially requested, expressed in Unix time format. */
  requestTime?: Date;
  /** When the sandbox process started, expressed in Unix time format. */
  startTime?: Date;
  /** When the sandbox process ended, expressed in Unix time format. */
  endTime?: Date;
  /** The status of the sandbox. */
  status?: string;
  source?: ProjectSource;
  /** Any version identifier for the version of the sandbox to be built. */
  sourceVersion?: string;
  /** An array of ProjectSource objects. */
  secondarySources?: ProjectSource[];
  /** An array of ProjectSourceVersion objects. */
  secondarySourceVersions?: ProjectSourceVersion[];
  environment?: ProjectEnvironment;
  /**
   * An array of ProjectFileSystemLocation objects for a CodeBuild build project. A
   * ProjectFileSystemLocation object specifies the identifier, location, mountOptions, mountPoint,
   * and type of a file system created using Amazon Elastic File System.
   */
  fileSystemLocations?: ProjectFileSystemLocation[];
  /**
   * How long, in minutes, from 5 to 2160 (36 hours), for CodeBuild to wait before timing out this
   * sandbox if it does not get marked as completed.
   */
  timeoutInMinutes?: number;
  /** The number of minutes a sandbox is allowed to be queued before it times out. */
  queuedTimeoutInMinutes?: number;
  vpcConfig?: VpcConfig;
  logConfig?: LogsConfig;
  /**
   * The Key Management Service customer master key (CMK) to be used for encrypting the sandbox
   * output artifacts.
   */
  encryptionKey?: string;
  /** The name of a service role used for this sandbox. */
  serviceRole?: string;
  currentSession?: SandboxSession;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sandboxSchema: Schema<Sandbox> = s.object<Sandbox>(
  {
    id: s.optional(s.string()),
    arn: s.optional(s.string()),
    projectName: s.optional(s.string()),
    requestTime: s.optional(s.dateTime()),
    startTime: s.optional(s.dateTime()),
    endTime: s.optional(s.dateTime()),
    status: s.optional(s.string()),
    source: s.optional(s.lazy(() => projectSourceSchema)),
    sourceVersion: s.optional(s.string()),
    secondarySources: s.optional(s.array(s.lazy(() => projectSourceSchema))),
    secondarySourceVersions: s.optional(s.array(s.lazy(() => projectSourceVersionSchema))),
    environment: s.optional(s.lazy(() => projectEnvironmentSchema)),
    fileSystemLocations: s.optional(s.array(s.lazy(() => projectFileSystemLocationSchema))),
    timeoutInMinutes: s.optional(s.int()),
    queuedTimeoutInMinutes: s.optional(s.int()),
    vpcConfig: s.optional(s.lazy(() => vpcConfigSchema)),
    logConfig: s.optional(s.lazy(() => logsConfigSchema)),
    encryptionKey: s.optional(s.string()),
    serviceRole: s.optional(s.string()),
    currentSession: s.optional(s.lazy(() => sandboxSessionSchema)),
  },
  { additionalProperties: s.json() },
);
