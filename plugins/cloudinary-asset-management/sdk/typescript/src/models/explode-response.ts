import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type ExplodeResponse = {
  /** The status of the explode operation. */
  status?: Status;
  /** The ID of the batch operation. */
  batchId?: string;
};

export const explodeResponseSchema: Schema<ExplodeResponse> = s.object<ExplodeResponse>({
  status: s.optional(s.lazy(() => statusSchema)),
  batchId: s.optional(s.string()),
  _keysMap: {
    batchId: "batch_id",
  },
});
