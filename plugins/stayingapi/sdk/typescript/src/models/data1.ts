import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Data1 = {
  jobId: string;
  /** @default "completed" */
  status?: "completed";
  /**
   * The endpoint payload — the SAME unified schema the synchronous call returns (Property[] |
   * Availability[] | Price | PriceCompare | Review[]).
   */
  result: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data1Schema: Schema<Data1> = s.object<Data1>(
  {
    jobId: s.string(),
    status: s.defaulted(s.literal("completed"), "completed"),
    result: s.record(s.string(), s.unknown()),
  },
  { additionalProperties: s.json() },
);
