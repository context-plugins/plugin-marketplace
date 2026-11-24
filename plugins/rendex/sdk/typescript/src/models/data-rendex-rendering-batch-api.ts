import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type DataRendexRenderingBatchApi = {
  /** Unique batch identifier for polling */
  batchId?: string;
  /** Number of URLs in the batch */
  totalUrls?: number;
  status?: Status;
  createdAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataRendexRenderingBatchApiSchema: Schema<DataRendexRenderingBatchApi> =
  s.object<DataRendexRenderingBatchApi>(
    {
      batchId: s.optional(s.string()),
      totalUrls: s.optional(s.int()),
      status: s.optional(s.lazy(() => statusSchema)),
      createdAt: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
