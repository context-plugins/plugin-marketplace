import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PhaseContext = {
  /** The status code for the context of the build phase. */
  statusCode?: string;
  /**
   * An explanation of the build phase's context. This might include a command ID and an exit code.
   */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const phaseContextSchema: Schema<PhaseContext> = s.object<PhaseContext>(
  {
    statusCode: s.optional(s.string()),
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
