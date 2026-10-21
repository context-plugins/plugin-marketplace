import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Object ACL to assign to uploaded objects */
export const ObjectAcl = {
  Private: "private",
  PublicRead: "public-read",
  PublicReadWrite: "public-read-write",
  AuthenticatedRead: "authenticated-read",
  AwsExecRead: "aws-exec-read",
  BucketOwnerRead: "bucket-owner-read",
  BucketOwnerFullControl: "bucket-owner-full-control",
} as const;
export type ObjectAcl = (typeof ObjectAcl)[keyof typeof ObjectAcl] | (string & {});

export const objectAclSchema: EnumSchema<ObjectAcl> = s.enumOf<ObjectAcl>(ObjectAcl);
