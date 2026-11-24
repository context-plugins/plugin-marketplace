import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GoogleCloudApigeeV1DebugSession = {
  /**
   * Optional. The time in seconds after which this DebugSession should end. This value will
   * override the value in query param, if both are provided.
   */
  timeout?: string;
  /**
   * Optional. The maximum number of bytes captured from the response payload. Min = 0, Max = 5120,
   * Default = 5120.
   */
  tracesize?: number;
  /** Output only. The first transaction creation timestamp, recorded by UAP. */
  createTime?: string;
  /** A unique ID for this DebugSession. */
  name?: string;
  /** Optional. The number of request to be traced. Min = 1, Max = 15, Default = 10. */
  count?: number;
  /**
   * Optional. The length of time, in seconds, that this debug session is valid, starting from when
   * it's received in the control plane. Min = 1, Max = 15, Default = 10.
   */
  validity?: number;
  /**
   * Optional. A conditional statement which is evaluated against the request message to determine
   * if it should be traced. Syntax matches that of on API Proxy bundle flow Condition.
   */
  filter?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1DebugSessionSchema: Schema<GoogleCloudApigeeV1DebugSession> =
  s.object<GoogleCloudApigeeV1DebugSession>(
    {
      timeout: s.optional(s.string()),
      tracesize: s.optional(s.int()),
      createTime: s.optional(s.string()),
      name: s.optional(s.string()),
      count: s.optional(s.int()),
      validity: s.optional(s.int()),
      filter: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
