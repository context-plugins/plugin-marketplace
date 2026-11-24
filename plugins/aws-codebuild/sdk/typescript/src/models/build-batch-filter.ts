import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status5Schema, type Status5 } from "./status5.js";

export type BuildBatchFilter = {
  /**
   * The status of the batch builds to retrieve. Only batch builds that have this status will be
   * retrieved.
   */
  status?: Status5;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const buildBatchFilterSchema: Schema<BuildBatchFilter> = s.object<BuildBatchFilter>(
  {
    status: s.optional(s.lazy(() => status5Schema)),
  },
  { additionalProperties: s.json() },
);
