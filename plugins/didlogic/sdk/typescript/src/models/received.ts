import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Statistics for received (incoming) calls */
export type Received = {
  /** Total cost of received calls */
  total: string;
  /** Number of received calls */
  count: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const receivedSchema: Schema<Received> = s.object<Received>(
  {
    total: s.string(),
    count: s.int(),
  },
  { additionalProperties: s.json() },
);
