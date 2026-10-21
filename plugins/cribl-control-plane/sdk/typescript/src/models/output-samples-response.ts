import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Sample events from a Destination. */
export type OutputSamplesResponse = {
  /** Array of sample events returned from a Destination test. */
  events: Record<string, unknown>[];
};

export const outputSamplesResponseSchema: Schema<OutputSamplesResponse> = s.object<OutputSamplesResponse>({
  events: s.array(s.record(s.string(), s.unknown())),
});
