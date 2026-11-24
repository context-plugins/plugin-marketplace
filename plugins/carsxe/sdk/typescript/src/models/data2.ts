import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Data2 = {
  batchId?: string;
  numericBatchId?: number;
  status?: string;
  totalVins?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data2Schema: Schema<Data2> = s.object<Data2>(
  {
    batchId: s.optional(s.string()),
    numericBatchId: s.optional(s.int()),
    status: s.optional(s.string()),
    totalVins: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
