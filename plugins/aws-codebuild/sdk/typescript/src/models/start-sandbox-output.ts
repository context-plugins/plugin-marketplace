import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sandboxSchema, type Sandbox } from "./sandbox.js";

export type StartSandboxOutput = {
  sandbox?: Sandbox;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startSandboxOutputSchema: Schema<StartSandboxOutput> = s.object<StartSandboxOutput>(
  {
    sandbox: s.optional(s.lazy(() => sandboxSchema)),
  },
  { additionalProperties: s.json() },
);
