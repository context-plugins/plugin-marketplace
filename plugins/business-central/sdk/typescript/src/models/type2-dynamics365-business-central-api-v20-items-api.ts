import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The item type */
export const Type2Dynamics365BusinessCentralApiV20ItemsApi = {
  Inventory: "Inventory",
  Service: "Service",
  NonInventory: "Non-Inventory",
} as const;
export type Type2Dynamics365BusinessCentralApiV20ItemsApi =
  | (typeof Type2Dynamics365BusinessCentralApiV20ItemsApi)[keyof typeof Type2Dynamics365BusinessCentralApiV20ItemsApi]
  | (string & {});

export const type2Dynamics365BusinessCentralApiV20ItemsApiSchema: EnumSchema<Type2Dynamics365BusinessCentralApiV20ItemsApi> =
  s.enumOf<Type2Dynamics365BusinessCentralApiV20ItemsApi>(Type2Dynamics365BusinessCentralApiV20ItemsApi);
