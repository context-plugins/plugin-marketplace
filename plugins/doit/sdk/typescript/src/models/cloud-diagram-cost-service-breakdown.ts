import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A single service entry within the cost-by-service breakdown. */
export type CloudDiagramCostServiceBreakdown = {
  /** Cloud service label (e.g. `EC2`). */
  service: string;
  /** Cost amount for this service within the snapshot window. */
  amount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudDiagramCostServiceBreakdownSchema: Schema<CloudDiagramCostServiceBreakdown> =
  s.object<CloudDiagramCostServiceBreakdown>(
    {
      service: s.string(),
      amount: s.float64(),
    },
    { additionalProperties: s.json() },
  );
