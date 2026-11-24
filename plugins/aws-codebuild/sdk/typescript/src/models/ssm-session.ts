import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SsmSession = {
  /** The ID of the session. */
  sessionId?: string;
  /** An encrypted token value containing session and caller information. */
  tokenValue?: string;
  /**
   * A URL back to SSM Agent on the managed node that the Session Manager client uses to send
   * commands and receive output from the node.
   */
  streamUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ssmSessionSchema: Schema<SsmSession> = s.object<SsmSession>(
  {
    sessionId: s.optional(s.string()),
    tokenValue: s.optional(s.string()),
    streamUrl: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
