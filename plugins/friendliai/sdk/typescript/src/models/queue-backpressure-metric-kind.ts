import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Queue backpressure metric kind. */
export const QueueBackpressureMetricKind = {
  TpotMs: "TPOT_MS",
  TtftMs: "TTFT_MS",
  RequestCount: "REQUEST_COUNT",
  WorkspaceUtilization: "WORKSPACE_UTILIZATION",
  QueuedPrefillTokens: "QUEUED_PREFILL_TOKENS",
} as const;
export type QueueBackpressureMetricKind =
  | (typeof QueueBackpressureMetricKind)[keyof typeof QueueBackpressureMetricKind]
  | (string & {});

export const queueBackpressureMetricKindSchema: EnumSchema<QueueBackpressureMetricKind> =
  s.enumOf<QueueBackpressureMetricKind>(QueueBackpressureMetricKind);
