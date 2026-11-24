import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StartSandboxInput = {
  /** The CodeBuild project name. */
  projectName?: string;
  /** A unique client token. */
  idempotencyToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startSandboxInputSchema: Schema<StartSandboxInput> = s.object<StartSandboxInput>(
  {
    projectName: s.optional(s.string()),
    idempotencyToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
