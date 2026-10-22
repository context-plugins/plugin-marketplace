import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { outputResponseSchema, type OutputResponse } from "./output-response.js";

export type CountedOutputResponse = {
  /** Number of items returned in the items array. */
  count: number;
  /** The list of items returned in this response. */
  items: OutputResponse[];
};

export const countedOutputResponseSchema: Schema<CountedOutputResponse> = s.object<CountedOutputResponse>({
  count: s.int(),
  items: s.array(s.lazy(() => outputResponseSchema)),
});
