import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. Repair action to take on specified resources of the node pool. */
export const RepairAction = {
  RepairActionUnspecified: "REPAIR_ACTION_UNSPECIFIED",
  Replace: "REPLACE",
} as const;
export type RepairAction = (typeof RepairAction)[keyof typeof RepairAction] | (string & {});

export const repairActionSchema: EnumSchema<RepairAction> = s.enumOf<RepairAction>(RepairAction);
