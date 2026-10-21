import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  s3PartitioningSchemeDdssSchema,
  type S3PartitioningSchemeDdss,
} from "../s3-partitioning-scheme-ddss.js";
import {
  s3PartitioningSchemeNoneSchema,
  type S3PartitioningSchemeNone,
} from "../s3-partitioning-scheme-none.js";

export type BaseType19 =
  | (S3PartitioningSchemeDdss & { partitioningScheme: "ddss" })
  | (S3PartitioningSchemeNone & { partitioningScheme: "none" });

export const baseType19Schema: Schema<BaseType19> = s.discriminatedUnion<BaseType19>("partitioningScheme", {
  ddss: s3PartitioningSchemeDdssSchema,
  none: s3PartitioningSchemeNoneSchema,
});
