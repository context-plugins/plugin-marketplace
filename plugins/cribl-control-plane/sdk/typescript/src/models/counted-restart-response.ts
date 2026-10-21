import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { restartResponseSchema, type RestartResponse } from "./restart-response.js";

export type CountedRestartResponse = {
  /** Number of items returned in the items array. */
  count: number;
  /** The list of items returned in this response. */
  items: RestartResponse[];
};

export const countedRestartResponseSchema: Schema<CountedRestartResponse> = s.object<CountedRestartResponse>({
  count: s.int(),
  items: s.array(s.lazy(() => restartResponseSchema)),
});
