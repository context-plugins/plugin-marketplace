import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { actionSchema, type Action } from "./action.js";
import { status39Schema, type Status39 } from "./status39.js";

export type ProviderStateSync = {
  action: Action;
  status: Status39;
  reason?: string | null;
  error?: string | null;
  syncedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const providerStateSyncSchema: Schema<ProviderStateSync> = s.object<ProviderStateSync>(
  {
    action: actionSchema,
    status: status39Schema,
    reason: s.optionalNullable(s.string()),
    error: s.optionalNullable(s.string()),
    syncedAt: s.optionalNullable(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
