import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { signalV2Schema, type SignalV2 } from "./signal-v2.js";

export type UsageV2SignalsBulkRequest = {
  signals?: SignalV2[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usageV2SignalsBulkRequestSchema: Schema<UsageV2SignalsBulkRequest> =
  s.object<UsageV2SignalsBulkRequest>(
    {
      signals: s.optional(s.array(s.lazy(() => signalV2Schema))),
    },
    { additionalProperties: s.json() },
  );
