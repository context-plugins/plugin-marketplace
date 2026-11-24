import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Job cancel result.
 *
 * `cancelled` counts the non-terminal traces marked `cancelling`. The rewrite transitions rows in
 * one server-side pass, so there is no running-vs-queued split to report.
 */
export type CancelJobResponse = {
  /** @default "accepted" */
  status?: string;
  cancelled: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cancelJobResponseSchema: Schema<CancelJobResponse> = s.object<CancelJobResponse>(
  {
    status: s.defaulted(s.string(), "accepted"),
    cancelled: s.int(),
  },
  { additionalProperties: s.json() },
);
