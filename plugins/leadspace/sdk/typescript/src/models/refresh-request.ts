import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RefreshRequest = {
  user: string;
  refreshToken: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const refreshRequestSchema: Schema<RefreshRequest> = s.object<RefreshRequest>(
  {
    user: s.string(),
    refreshToken: s.string(),
  },
  { additionalProperties: s.json() },
);
