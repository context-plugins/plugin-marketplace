import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SessionMetadata = {
  /**
   * The type of SDK that was used to stream the video for the Face Liveness session. This value is
   * self-reported by the client that streamed the session, and Amazon Rekognition doesn't verify
   * it. Don't rely on it for authentication, authorization, or any other security decision.
   */
  sdkType: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sessionMetadataSchema: Schema<SessionMetadata> = s.object<SessionMetadata>(
  {
    sdkType: s.string(),
    _keysMap: {
      sdkType: "SDKType",
    },
  },
  { additionalProperties: s.json() },
);
