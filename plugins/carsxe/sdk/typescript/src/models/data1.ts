import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Data1 = {
  batchId?: string;
  status?: string;
  totalVins?: number;
  processedVins?: number;
  /**
   * Opaque batch-scoped credential returned only for x402 submissions. Send it in
   * X-CarsXE-Batch-Token on follow-up requests.
   */
  batchToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data1Schema: Schema<Data1> = s.object<Data1>(
  {
    batchId: s.optional(s.string()),
    status: s.optional(s.string()),
    totalVins: s.optional(s.int()),
    processedVins: s.optional(s.int()),
    batchToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
