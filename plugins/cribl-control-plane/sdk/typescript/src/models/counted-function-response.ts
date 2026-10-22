import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { functionResponseSchema, type FunctionResponse } from "./unions/function-response.js";

export type CountedFunctionResponse = {
  /** Number of items returned in the items array. */
  count: number;
  /** The list of items returned in this response. */
  items: FunctionResponse[];
};

export const countedFunctionResponseSchema: Schema<CountedFunctionResponse> =
  s.object<CountedFunctionResponse>({
    count: s.int(),
    items: s.array(s.lazy(() => functionResponseSchema)),
  });
