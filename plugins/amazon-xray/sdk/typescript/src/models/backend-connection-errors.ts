import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BackendConnectionErrors = {
  timeoutCount?: number;
  connectionRefusedCount?: number;
  httpCode4XxCount?: number;
  httpCode5XxCount?: number;
  unknownHostCount?: number;
  otherCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const backendConnectionErrorsSchema: Schema<BackendConnectionErrors> =
  s.object<BackendConnectionErrors>(
    {
      timeoutCount: s.optional(s.int()),
      connectionRefusedCount: s.optional(s.int()),
      httpCode4XxCount: s.optional(s.int()),
      httpCode5XxCount: s.optional(s.int()),
      unknownHostCount: s.optional(s.int()),
      otherCount: s.optional(s.int()),
      _keysMap: {
        timeoutCount: "TimeoutCount",
        connectionRefusedCount: "ConnectionRefusedCount",
        httpCode4XxCount: "HTTPCode4XXCount",
        httpCode5XxCount: "HTTPCode5XXCount",
        unknownHostCount: "UnknownHostCount",
        otherCount: "OtherCount",
      },
    },
    { additionalProperties: s.json() },
  );
