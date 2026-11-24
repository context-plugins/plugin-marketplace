import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The source, AWS_CLOUD_TRAIL or AWS_CODE_DEPLOY, of the events you want returned. */
export const DataSource1 = {
  AwsCloudTrail: "AWS_CLOUD_TRAIL",
  AwsCodeDeploy: "AWS_CODE_DEPLOY",
} as const;
export type DataSource1 = (typeof DataSource1)[keyof typeof DataSource1] | (string & {});

export const dataSource1Schema: EnumSchema<DataSource1> = s.enumOf<DataSource1>(DataSource1);
