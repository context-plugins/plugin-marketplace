import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The customer type */
export const TypeDynamics365BusinessCentralApiV20CustomersApi = {
  Person: "Person",
  Company: "Company",
} as const;
export type TypeDynamics365BusinessCentralApiV20CustomersApi =
  | (typeof TypeDynamics365BusinessCentralApiV20CustomersApi)[keyof typeof TypeDynamics365BusinessCentralApiV20CustomersApi]
  | (string & {});

export const typeDynamics365BusinessCentralApiV20CustomersApiSchema: EnumSchema<TypeDynamics365BusinessCentralApiV20CustomersApi> =
  s.enumOf<TypeDynamics365BusinessCentralApiV20CustomersApi>(
    TypeDynamics365BusinessCentralApiV20CustomersApi,
  );
