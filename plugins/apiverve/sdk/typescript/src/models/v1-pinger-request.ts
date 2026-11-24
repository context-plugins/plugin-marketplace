import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1PingerRequest = {
  /** The host name or public IP that you want to ping */
  host: string;
  /** The timeout for the ping request in milliseconds */
  timeout?: number;
  /** How many pings to send before averaging the round-trip time */
  roundTrips?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1PingerRequestSchema: Schema<V1PingerRequest> = s.object<V1PingerRequest>(
  {
    host: s.string(),
    timeout: s.optional(s.int()),
    roundTrips: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
