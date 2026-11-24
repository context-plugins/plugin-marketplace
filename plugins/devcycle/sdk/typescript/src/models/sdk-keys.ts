import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SdkKeys = {
  mobile: Record<string, unknown>[];
  client: Record<string, unknown>[];
  server: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sdkKeysSchema: Schema<SdkKeys> = s.object<SdkKeys>(
  {
    mobile: s.array(s.record(s.string(), s.unknown())),
    client: s.array(s.record(s.string(), s.unknown())),
    server: s.array(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
