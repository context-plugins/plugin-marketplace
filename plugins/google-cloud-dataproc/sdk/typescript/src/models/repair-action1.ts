import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. Repair action to take on specified resources of the node pool. */
export const RepairAction1 = {
  RepairActionUnspecified: "REPAIR_ACTION_UNSPECIFIED",
  Delete: "DELETE",
} as const;
export type RepairAction1 = (typeof RepairAction1)[keyof typeof RepairAction1] | (string & {});

export const repairAction1Schema: EnumSchema<RepairAction1> = s.enumOf<RepairAction1>(RepairAction1);
