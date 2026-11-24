import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { repairAction1Schema, type RepairAction1 } from "./repair-action1.js";

/** indicating a list of workers of same type */
export type NodePool = {
  /**
   * Required. A unique id of the node pool. Primary and Secondary workers can be specified using
   * special reserved ids PRIMARY_WORKER_POOL and SECONDARY_WORKER_POOL respectively. Aux node pools
   * can be referenced using corresponding pool id.
   */
  id?: string;
  /** Name of instances to be repaired. These instances must belong to specified node pool. */
  instanceNames?: string[];
  /** Required. Repair action to take on specified resources of the node pool. */
  repairAction?: RepairAction1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const nodePoolSchema: Schema<NodePool> = s.object<NodePool>(
  {
    id: s.optional(s.string()),
    instanceNames: s.optional(s.array(s.string())),
    repairAction: s.optional(s.lazy(() => repairAction1Schema)),
  },
  { additionalProperties: s.json() },
);
