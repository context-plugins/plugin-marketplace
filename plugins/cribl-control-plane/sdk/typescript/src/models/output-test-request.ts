import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request body for testing a Destination by sending sample events. */
export type OutputTestRequest = {
  /** Array of event objects to send to the Destination for testing. */
  events: Record<string, unknown>[];
};

export const outputTestRequestSchema: Schema<OutputTestRequest> = s.object<OutputTestRequest>({
  events: s.array(s.record(s.string(), s.unknown())),
});
