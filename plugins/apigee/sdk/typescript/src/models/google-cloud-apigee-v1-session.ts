import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Session carries the debug session id and its creation time. */
export type GoogleCloudApigeeV1Session = {
  /** The debug session ID. */
  id?: string;
  /** The first transaction creation timestamp in millisecond, recorded by UAP. */
  timestampMs?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SessionSchema: Schema<GoogleCloudApigeeV1Session> =
  s.object<GoogleCloudApigeeV1Session>(
    {
      id: s.optional(s.string()),
      timestampMs: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
