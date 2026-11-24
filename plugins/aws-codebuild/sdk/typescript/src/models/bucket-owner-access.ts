import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BucketOwnerAccess = {
  None: "NONE",
  ReadOnly: "READ_ONLY",
  Full: "FULL",
} as const;
export type BucketOwnerAccess = (typeof BucketOwnerAccess)[keyof typeof BucketOwnerAccess] | (string & {});

export const bucketOwnerAccessSchema: EnumSchema<BucketOwnerAccess> =
  s.enumOf<BucketOwnerAccess>(BucketOwnerAccess);
