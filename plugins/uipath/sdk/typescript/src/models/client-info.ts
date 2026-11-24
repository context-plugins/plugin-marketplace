import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Client connection information for an audit event */
export type ClientInfo = {
  /** IP address from which the action was performed */
  ipAddress?: string;
  /** Country resolved from the IP address */
  country?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const clientInfoSchema: Schema<ClientInfo> = s.object<ClientInfo>(
  {
    ipAddress: s.optional(s.string()),
    country: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
