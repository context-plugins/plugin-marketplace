import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Moves an API Proxy to a different Space. */
export type GoogleCloudApigeeV1MoveApiProxyRequest = {
  /**
   * Optional. Resource ID of the space to move the proxy to. If unspecified, the proxy will be
   * moved to the organization level.
   */
  space?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1MoveApiProxyRequestSchema: Schema<GoogleCloudApigeeV1MoveApiProxyRequest> =
  s.object<GoogleCloudApigeeV1MoveApiProxyRequest>(
    {
      space: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
