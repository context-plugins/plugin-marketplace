import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { outputTestResponseSchema, type OutputTestResponse } from "./output-test-response.js";

export type CountedOutputTestResponse = {
  /** Number of items returned in the items array. */
  count: number;
  /** The list of items returned in this response. */
  items: OutputTestResponse[];
};

export const countedOutputTestResponseSchema: Schema<CountedOutputTestResponse> =
  s.object<CountedOutputTestResponse>({
    count: s.int(),
    items: s.array(s.lazy(() => outputTestResponseSchema)),
  });
