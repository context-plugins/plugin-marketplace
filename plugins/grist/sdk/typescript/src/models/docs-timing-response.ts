import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status1Schema, type Status1 } from "./status1.js";

export type DocsTimingResponse = {
  /**
   * - disabled: timing is not enabled
   * - pending: timing is enabled but no data yet
   * - active: timing is enabled and data is available
   */
  status: Status1;
  /** Timing data (only present when status is 'active') */
  timing?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docsTimingResponseSchema: Schema<DocsTimingResponse> = s.object<DocsTimingResponse>(
  {
    status: status1Schema,
    timing: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
