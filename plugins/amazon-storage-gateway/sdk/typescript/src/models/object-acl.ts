import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A value that sets the access control list (ACL) permission for objects in the S3 bucket that a S3
 * File Gateway puts objects into. The default value is private.
 */
export const ObjectAcl = {
  Private: "private",
  PublicRead: "public-read",
  PublicReadWrite: "public-read-write",
  AuthenticatedRead: "authenticated-read",
  BucketOwnerRead: "bucket-owner-read",
  BucketOwnerFullControl: "bucket-owner-full-control",
  AwsExecRead: "aws-exec-read",
} as const;
export type ObjectAcl = (typeof ObjectAcl)[keyof typeof ObjectAcl] | (string & {});

export const objectAclSchema: EnumSchema<ObjectAcl> = s.enumOf<ObjectAcl>(ObjectAcl);
