import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ssmSessionSchema, type SsmSession } from "./ssm-session.js";

export type StartSandboxConnectionOutput = {
  ssmSession?: SsmSession;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startSandboxConnectionOutputSchema: Schema<StartSandboxConnectionOutput> =
  s.object<StartSandboxConnectionOutput>(
    {
      ssmSession: s.optional(s.lazy(() => ssmSessionSchema)),
    },
    { additionalProperties: s.json() },
  );
