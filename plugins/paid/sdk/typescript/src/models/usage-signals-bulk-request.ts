import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { signalReferenceUsageApiSchema, type SignalReferenceUsageApi } from "./signal-reference-usage-api.js";

export type UsageSignalsBulkRequest = {
  signals?: SignalReferenceUsageApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usageSignalsBulkRequestSchema: Schema<UsageSignalsBulkRequest> =
  s.object<UsageSignalsBulkRequest>(
    {
      signals: s.optional(s.array(s.lazy(() => signalReferenceUsageApiSchema))),
    },
    { additionalProperties: s.json() },
  );
