import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Replaces both lists. Send [] to clear one. */
export type HostnameListRequest = {
  allowed?: string[];
  blocked?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const hostnameListRequestSchema: Schema<HostnameListRequest> = s.object<HostnameListRequest>(
  {
    allowed: s.optional(s.array(s.string())),
    blocked: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
