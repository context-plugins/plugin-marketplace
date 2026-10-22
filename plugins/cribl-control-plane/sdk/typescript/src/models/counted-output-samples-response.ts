import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { outputSamplesResponseSchema, type OutputSamplesResponse } from "./output-samples-response.js";

export type CountedOutputSamplesResponse = {
  /** Number of items returned in the items array. */
  count: number;
  /** The list of items returned in this response. */
  items: OutputSamplesResponse[];
};

export const countedOutputSamplesResponseSchema: Schema<CountedOutputSamplesResponse> =
  s.object<CountedOutputSamplesResponse>({
    count: s.int(),
    items: s.array(s.lazy(() => outputSamplesResponseSchema)),
  });
