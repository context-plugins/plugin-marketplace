import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AppInfo = {
  id?: string;
  name?: string;
  publisher?: string;
  version?: string;
  state?: string;
  lastOperationId?: string;
  lastUpdateAttemptResult?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const appInfoSchema: Schema<AppInfo> = s.object<AppInfo>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    publisher: s.optional(s.string()),
    version: s.optional(s.string()),
    state: s.optional(s.string()),
    lastOperationId: s.optional(s.string()),
    lastUpdateAttemptResult: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
