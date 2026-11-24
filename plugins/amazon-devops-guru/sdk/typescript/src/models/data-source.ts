import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The source, AWS_CLOUD_TRAIL or AWS_CODE_DEPLOY, where DevOps Guru analysis found the event. */
export const DataSource = {
  AwsCloudTrail: "AWS_CLOUD_TRAIL",
  AwsCodeDeploy: "AWS_CODE_DEPLOY",
} as const;
export type DataSource = (typeof DataSource)[keyof typeof DataSource] | (string & {});

export const dataSourceSchema: EnumSchema<DataSource> = s.enumOf<DataSource>(DataSource);
