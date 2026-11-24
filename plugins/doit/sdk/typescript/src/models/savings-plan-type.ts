import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Savings Plan type. Values match the AWS Savings Plans API in snake_case, plus `database`. */
export const SavingsPlanType = {
  Compute: "compute",
  Ec2Instance: "ec2_instance",
  Sagemaker: "sagemaker",
  Database: "database",
} as const;
export type SavingsPlanType = (typeof SavingsPlanType)[keyof typeof SavingsPlanType] | (string & {});

export const savingsPlanTypeSchema: EnumSchema<SavingsPlanType> = s.enumOf<SavingsPlanType>(SavingsPlanType);
