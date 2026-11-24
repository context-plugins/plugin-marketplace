import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeAwsCodeBuildCommandExecutionApiSchema,
  type TypeAwsCodeBuildCommandExecutionApi,
} from "./type-aws-code-build-command-execution-api.js";

export type StartCommandExecutionInput = {
  /** A sandboxId or sandboxArn. */
  sandboxId: string;
  /** The command that needs to be executed. */
  command: string;
  /** The command type. */
  type?: TypeAwsCodeBuildCommandExecutionApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startCommandExecutionInputSchema: Schema<StartCommandExecutionInput> =
  s.object<StartCommandExecutionInput>(
    {
      sandboxId: s.string(),
      command: s.string(),
      type: s.optional(s.lazy(() => typeAwsCodeBuildCommandExecutionApiSchema)),
    },
    { additionalProperties: s.json() },
  );
