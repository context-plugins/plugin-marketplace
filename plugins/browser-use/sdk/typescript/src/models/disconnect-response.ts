import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response for disconnect action. */
export type DisconnectResponse = {
  success: boolean;
  provider: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const disconnectResponseSchema: Schema<DisconnectResponse> = s.object<DisconnectResponse>(
  {
    success: s.boolean(),
    provider: s.string(),
  },
  { additionalProperties: s.json() },
);
