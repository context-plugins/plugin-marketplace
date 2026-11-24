import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BlockedDynamics365BusinessCentralApiV20VendorsApi = {
  Payment: "Payment",
  All: "All",
} as const;
export type BlockedDynamics365BusinessCentralApiV20VendorsApi =
  | (typeof BlockedDynamics365BusinessCentralApiV20VendorsApi)[keyof typeof BlockedDynamics365BusinessCentralApiV20VendorsApi]
  | (string & {});

export const blockedDynamics365BusinessCentralApiV20VendorsApiSchema: EnumSchema<BlockedDynamics365BusinessCentralApiV20VendorsApi> =
  s.enumOf<BlockedDynamics365BusinessCentralApiV20VendorsApi>(
    BlockedDynamics365BusinessCentralApiV20VendorsApi,
  );
