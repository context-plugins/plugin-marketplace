import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { effectiveStreamingModeSchema, type EffectiveStreamingMode } from "./effective-streaming-mode.js";
import { state2Schema, type State2 } from "./state2.js";
import { streamingModeSchema, type StreamingMode } from "./streaming-mode.js";

/**
 * A Gateway is an API-aware HTTP proxy. It performs API-Method and/or API-Consumer specific actions
 * based on an API Config such as authentication, policy enforcement, and backend selection.
 */
export type ApigatewayGateway = {
  /** Output only. Created time. */
  createTime?: string;
  /** Optional. Display name. */
  displayName?: string;
  /** Output only. The default hostname that serves traffic for this Gateway. */
  defaultHostname?: string;
  /**
   * Identifier. Resource name of the Gateway. Format:
   * projects/{project}/locations/{location}/gateways/{gateway}
   */
  name?: string;
  /** Output only. Updated time. */
  updateTime?: string;
  /**
   * Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on
   * labels for more details. https://cloud.google.com/compute/docs/labeling-resources
   */
  labels?: Record<string, string>;
  /**
   * Required. Resource name of the API Config for this Gateway. Format:
   * projects/{project}/locations/global/apis/{api}/configs/{apiConfig}
   */
  apiConfig?: string;
  /**
   * Output only. The streaming mode this gateway is actually served with, which the service
   * resolves at creation from `streaming_mode`, the referenced API Config, and the platform default
   * at the time. Read this rather than `streaming_mode` to determine whether a gateway supports
   * streaming.
   */
  effectiveStreamingMode?: EffectiveStreamingMode;
  /**
   * Optional. Immutable. Requests streaming for a new gateway. An attempt to change it on update is
   * rejected. If unset, the service selects the mode. This field records only what was requested
   * and is never modified by the service; read `effective_streaming_mode` for the mode the gateway
   * is served with.
   */
  streamingMode?: StreamingMode;
  /** Output only. The current state of the Gateway. */
  state?: State2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apigatewayGatewaySchema: Schema<ApigatewayGateway> = s.object<ApigatewayGateway>(
  {
    createTime: s.optional(s.string()),
    displayName: s.optional(s.string()),
    defaultHostname: s.optional(s.string()),
    name: s.optional(s.string()),
    updateTime: s.optional(s.string()),
    labels: s.optional(s.record(s.string(), s.string())),
    apiConfig: s.optional(s.string()),
    effectiveStreamingMode: s.optional(s.lazy(() => effectiveStreamingModeSchema)),
    streamingMode: s.optional(s.lazy(() => streamingModeSchema)),
    state: s.optional(s.lazy(() => state2Schema)),
  },
  { additionalProperties: s.json() },
);
