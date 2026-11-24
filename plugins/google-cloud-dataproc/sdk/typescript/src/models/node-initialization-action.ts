import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Specifies an executable to run on a fully configured node and a timeout period for executable
 * completion.
 */
export type NodeInitializationAction = {
  /**
   * Optional. Amount of time executable has to complete. Default is 10 minutes (see JSON
   * representation of Duration
   * (https://developers.google.com/protocol-buffers/docs/proto3#json)).Cluster creation fails with
   * an explanatory error message (the name of the executable that caused the error and the exceeded
   * timeout period) if the executable is not completed at end of the timeout period.
   */
  executionTimeout?: string;
  /** Required. Cloud Storage URI of executable file. */
  executableFile?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const nodeInitializationActionSchema: Schema<NodeInitializationAction> =
  s.object<NodeInitializationAction>(
    {
      executionTimeout: s.optional(s.string()),
      executableFile: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
