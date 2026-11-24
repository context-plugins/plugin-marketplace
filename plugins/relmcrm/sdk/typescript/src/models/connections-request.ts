import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ConnectionsRequest = {
  channel?: string;
  provider?: string;
  apiKey: string;
  from?: string;
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const connectionsRequestSchema: Schema<ConnectionsRequest> = s.object<ConnectionsRequest>(
  {
    channel: s.optional(s.string()),
    provider: s.optional(s.string()),
    apiKey: s.string(),
    from: s.optional(s.string()),
    name: s.optional(s.string()),
    _keysMap: {
      apiKey: "api_key",
    },
  },
  { additionalProperties: s.json() },
);
