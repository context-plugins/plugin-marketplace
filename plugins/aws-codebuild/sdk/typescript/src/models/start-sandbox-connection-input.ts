import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StartSandboxConnectionInput = {
  /** A sandboxId or sandboxArn. */
  sandboxId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startSandboxConnectionInputSchema: Schema<StartSandboxConnectionInput> =
  s.object<StartSandboxConnectionInput>(
    {
      sandboxId: s.string(),
    },
    { additionalProperties: s.json() },
  );
