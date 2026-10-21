import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Add samples response. */
export type AddSamplesResponse = {
  /** List of sample IDs that were added to the dataset. */
  samples: Record<string, unknown>[][];
};

export const addSamplesResponseSchema: Schema<AddSamplesResponse> = s.object<AddSamplesResponse>({
  samples: s.array(s.array(s.record(s.string(), s.unknown()))),
});
