import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AccountTypeDynamics365BusinessCentralApiV20JournalsApi = {
  GlAccount: "G/L Account",
  Customer: "Customer",
  Vendor: "Vendor",
  BankAccount: "Bank Account",
  FixedAsset: "Fixed Asset",
  Employee: "Employee",
} as const;
export type AccountTypeDynamics365BusinessCentralApiV20JournalsApi =
  | (typeof AccountTypeDynamics365BusinessCentralApiV20JournalsApi)[keyof typeof AccountTypeDynamics365BusinessCentralApiV20JournalsApi]
  | (string & {});

export const accountTypeDynamics365BusinessCentralApiV20JournalsApiSchema: EnumSchema<AccountTypeDynamics365BusinessCentralApiV20JournalsApi> =
  s.enumOf<AccountTypeDynamics365BusinessCentralApiV20JournalsApi>(
    AccountTypeDynamics365BusinessCentralApiV20JournalsApi,
  );
