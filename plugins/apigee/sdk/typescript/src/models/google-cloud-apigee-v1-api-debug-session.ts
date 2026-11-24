import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Session carries the debug session id and its creation time. */
export type GoogleCloudApigeeV1ApiDebugSession = {
  /** The debug session ID. */
  id?: string;
  /** The first transaction creation timestamp in millisecond, recorded by UAP. */
  createTime?: string;
  /** The environment ID of the deployed API proxy. */
  environmentId?: string;
  /** The revision ID of the deployed API proxy. */
  apiProxyRevisionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ApiDebugSessionSchema: Schema<GoogleCloudApigeeV1ApiDebugSession> =
  s.object<GoogleCloudApigeeV1ApiDebugSession>(
    {
      id: s.optional(s.string()),
      createTime: s.optional(s.string()),
      environmentId: s.optional(s.string()),
      apiProxyRevisionId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
