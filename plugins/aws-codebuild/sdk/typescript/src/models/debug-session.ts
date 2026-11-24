import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DebugSession = {
  /** Specifies if session debugging is enabled for this build. */
  sessionEnabled?: boolean;
  /**
   * Contains the identifier of the Session Manager session used for the build. To work with the
   * paused build, you open this session to examine, control, and resume the build.
   */
  sessionTarget?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const debugSessionSchema: Schema<DebugSession> = s.object<DebugSession>(
  {
    sessionEnabled: s.optional(s.boolean()),
    sessionTarget: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
