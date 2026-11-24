import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TypeDoiTPerfectScaleForCommitmentsAwsApi = {
  Compute: "compute",
  Ec2Instance: "ec2_instance",
  Sagemaker: "sagemaker",
  Database: "database",
} as const;
export type TypeDoiTPerfectScaleForCommitmentsAwsApi =
  | (typeof TypeDoiTPerfectScaleForCommitmentsAwsApi)[keyof typeof TypeDoiTPerfectScaleForCommitmentsAwsApi]
  | (string & {});

export const typeDoiTPerfectScaleForCommitmentsAwsApiSchema: EnumSchema<TypeDoiTPerfectScaleForCommitmentsAwsApi> =
  s.enumOf<TypeDoiTPerfectScaleForCommitmentsAwsApi>(TypeDoiTPerfectScaleForCommitmentsAwsApi);
