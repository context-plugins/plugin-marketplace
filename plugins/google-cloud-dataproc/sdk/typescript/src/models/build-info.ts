import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Native Build Info */
export type BuildInfo = {
  /** Optional. Build key. */
  buildKey?: string;
  /** Optional. Build value. */
  buildValue?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const buildInfoSchema: Schema<BuildInfo> = s.object<BuildInfo>(
  {
    buildKey: s.optional(s.string()),
    buildValue: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
