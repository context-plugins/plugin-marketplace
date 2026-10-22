import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { systemRestartResponseSchema, type SystemRestartResponse } from "./system-restart-response.js";

export type CountedSystemRestartResponse = {
  /** Number of items returned in the items array. */
  count: number;
  /** The list of items returned in this response. */
  items: SystemRestartResponse[];
};

export const countedSystemRestartResponseSchema: Schema<CountedSystemRestartResponse> =
  s.object<CountedSystemRestartResponse>({
    count: s.int(),
    items: s.array(s.lazy(() => systemRestartResponseSchema)),
  });
