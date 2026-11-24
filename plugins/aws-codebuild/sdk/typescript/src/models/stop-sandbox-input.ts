import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StopSandboxInput = {
  /** Information about the requested sandbox ID. */
  id: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stopSandboxInputSchema: Schema<StopSandboxInput> = s.object<StopSandboxInput>(
  {
    id: s.string(),
  },
  { additionalProperties: s.json() },
);
