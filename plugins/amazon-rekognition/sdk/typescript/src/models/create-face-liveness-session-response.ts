import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateFaceLivenessSessionResponse = {
  /**
   * A unique 128-bit UUID identifying a Face Liveness session. A new sessionID must be used for
   * every Face Liveness check. If a given sessionID is used for subsequent Face Liveness checks,
   * the checks will fail. Additionally, a SessionId expires 3 minutes after it's sent, making all
   * Liveness data associated with the session (e.g., sessionID, reference image, audit images,
   * etc.) unavailable.
   */
  sessionId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createFaceLivenessSessionResponseSchema: Schema<CreateFaceLivenessSessionResponse> =
  s.object<CreateFaceLivenessSessionResponse>(
    {
      sessionId: s.string(),
      _keysMap: {
        sessionId: "SessionId",
      },
    },
    { additionalProperties: s.json() },
  );
