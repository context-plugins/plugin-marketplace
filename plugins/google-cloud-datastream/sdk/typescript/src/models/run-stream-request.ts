import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cdcStrategy2Schema, type CdcStrategy2 } from "./cdc-strategy2.js";

/** Request message for running a stream. */
export type RunStreamRequest = {
  /**
   * Optional. The CDC strategy of the stream. If not set, the system's default value will be used.
   */
  cdcStrategy?: CdcStrategy2;
  /** Optional. Update the stream without validating it. */
  force?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runStreamRequestSchema: Schema<RunStreamRequest> = s.object<RunStreamRequest>(
  {
    cdcStrategy: s.optional(s.lazy(() => cdcStrategy2Schema)),
    force: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
