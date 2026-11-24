import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response for connection status check. */
export type ConnectionStatusResponse = {
  provider: string;
  isConnected: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const connectionStatusResponseSchema: Schema<ConnectionStatusResponse> =
  s.object<ConnectionStatusResponse>(
    {
      provider: s.string(),
      isConnected: s.boolean(),
      _keysMap: {
        isConnected: "is_connected",
      },
    },
    { additionalProperties: s.json() },
  );
