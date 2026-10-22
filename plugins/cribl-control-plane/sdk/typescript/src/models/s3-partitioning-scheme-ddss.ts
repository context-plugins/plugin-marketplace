import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { partitioningSchemeSchema, type PartitioningScheme } from "./partitioning-scheme.js";

export type S3PartitioningSchemeDdss = {
  /** Discriminator value. */
  partitioningScheme?: PartitioningScheme;
};

export const s3PartitioningSchemeDdssSchema: Schema<S3PartitioningSchemeDdss> =
  s.object<S3PartitioningSchemeDdss>({
    partitioningScheme: s.optional(s.lazy(() => partitioningSchemeSchema)),
  });
