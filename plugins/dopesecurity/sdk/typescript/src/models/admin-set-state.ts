import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AdminSetState = {
  /** Indicates if endpoint is set to enabled or not by the admin */
  enabled?: boolean;
  /** The timestamp when the admin last set the state of the endpoint */
  timestamp?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adminSetStateSchema: Schema<AdminSetState> = s.object<AdminSetState>(
  {
    enabled: s.optional(s.boolean()),
    timestamp: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
