import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { inputResponseSchema, type InputResponse } from "./input-response.js";

export type CountedInputResponse = {
  /** Number of items returned in the items array. */
  count: number;
  /** The list of items returned in this response. */
  items: InputResponse[];
};

export const countedInputResponseSchema: Schema<CountedInputResponse> = s.object<CountedInputResponse>({
  count: s.int(),
  items: s.array(s.lazy(() => inputResponseSchema)),
});
