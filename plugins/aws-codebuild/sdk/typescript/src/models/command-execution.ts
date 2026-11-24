import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { logsLocationSchema, type LogsLocation } from "./logs-location.js";
import {
  typeAwsCodeBuildCommandExecutionApiSchema,
  type TypeAwsCodeBuildCommandExecutionApi,
} from "./type-aws-code-build-command-execution-api.js";

export type CommandExecution = {
  /** The ID of the command execution. */
  id?: string;
  /** A sandboxId. */
  sandboxId?: string;
  /** When the command execution process was initially submitted, expressed in Unix time format. */
  submitTime?: Date;
  /** When the command execution process started, expressed in Unix time format. */
  startTime?: Date;
  /** When the command execution process ended, expressed in Unix time format. */
  endTime?: Date;
  /** The status of the command execution. */
  status?: string;
  /** The command that needs to be executed. */
  command?: string;
  /** The command type. */
  type?: TypeAwsCodeBuildCommandExecutionApi;
  /** The exit code to return upon completion. */
  exitCode?: string;
  /** The text written by the command to stdout. */
  standardOutputContent?: string;
  /** The text written by the command to stderr. */
  standardErrContent?: string;
  logs?: LogsLocation;
  /** A sandboxArn. */
  sandboxArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const commandExecutionSchema: Schema<CommandExecution> = s.object<CommandExecution>(
  {
    id: s.optional(s.string()),
    sandboxId: s.optional(s.string()),
    submitTime: s.optional(s.dateTime()),
    startTime: s.optional(s.dateTime()),
    endTime: s.optional(s.dateTime()),
    status: s.optional(s.string()),
    command: s.optional(s.string()),
    type: s.optional(s.lazy(() => typeAwsCodeBuildCommandExecutionApiSchema)),
    exitCode: s.optional(s.string()),
    standardOutputContent: s.optional(s.string()),
    standardErrContent: s.optional(s.string()),
    logs: s.optional(s.lazy(() => logsLocationSchema)),
    sandboxArn: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
