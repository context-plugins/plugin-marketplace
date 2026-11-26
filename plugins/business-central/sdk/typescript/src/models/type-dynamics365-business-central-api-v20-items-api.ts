import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TypeDynamics365BusinessCentralApiV20ItemsApi = {
  Inventory: "Inventory",
  Service: "Service",
  NonInventory: "Non-Inventory",
} as const;
export type TypeDynamics365BusinessCentralApiV20ItemsApi =
  | (typeof TypeDynamics365BusinessCentralApiV20ItemsApi)[keyof typeof TypeDynamics365BusinessCentralApiV20ItemsApi]
  | (string & {});

export const typeDynamics365BusinessCentralApiV20ItemsApiSchema: EnumSchema<TypeDynamics365BusinessCentralApiV20ItemsApi> =
  s.enumOf<TypeDynamics365BusinessCentralApiV20ItemsApi>(TypeDynamics365BusinessCentralApiV20ItemsApi);
