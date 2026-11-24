import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiKeyUsage = {
  keyId: number;
  /** Requests that authenticated with this key inside the window. */
  requests: number;
  /** Trailing window the count covers, in days. */
  windowDays: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiKeyUsageSchema: Schema<ApiKeyUsage> = s.object<ApiKeyUsage>(
  {
    keyId: s.int(),
    requests: s.int(),
    windowDays: s.int(),
    _keysMap: {
      keyId: "key_id",
      windowDays: "window_days",
    },
  },
  { additionalProperties: s.json() },
);
