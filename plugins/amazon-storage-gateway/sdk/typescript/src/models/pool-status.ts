import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of the custom tape pool. Pool can be ACTIVE or DELETED. */
export const PoolStatus = {
  Active: "ACTIVE",
  Deleted: "DELETED",
} as const;
export type PoolStatus = (typeof PoolStatus)[keyof typeof PoolStatus] | (string & {});

export const poolStatusSchema: EnumSchema<PoolStatus> = s.enumOf<PoolStatus>(PoolStatus);
