import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { providerStateSyncSchema, type ProviderStateSync } from "./provider-state-sync.js";

export type PlatformData = {
  canReply?: boolean | null;
  lastInboundAt?: Date | null;
  providerStateSync?: ProviderStateSync | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const platformDataSchema: Schema<PlatformData> = s.object<PlatformData>(
  {
    canReply: s.optionalNullable(s.boolean()),
    lastInboundAt: s.optionalNullable(s.dateTime()),
    providerStateSync: s.optionalNullable(s.lazy(() => providerStateSyncSchema)),
  },
  { additionalProperties: s.json() },
);
