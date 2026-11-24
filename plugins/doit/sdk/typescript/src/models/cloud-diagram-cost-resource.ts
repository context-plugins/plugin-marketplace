import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A single resource entry within the top-resources list. */
export type CloudDiagramCostResource = {
  /** Resource id (cloud-native id when available; otherwise the diagram component id). */
  id: string;
  /** Human-readable resource name. */
  name: string;
  /** Resource type label (e.g. `ec2`, `rds`). */
  type: string;
  /** Cost amount for this resource within the snapshot window. */
  amount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudDiagramCostResourceSchema: Schema<CloudDiagramCostResource> =
  s.object<CloudDiagramCostResource>(
    {
      id: s.string(),
      name: s.string(),
      type: s.string(),
      amount: s.float64(),
    },
    { additionalProperties: s.json() },
  );
