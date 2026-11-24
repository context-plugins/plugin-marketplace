import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ObjectAcl2 = {
  Private: "private",
  PublicRead: "public-read",
  PublicReadWrite: "public-read-write",
  AuthenticatedRead: "authenticated-read",
  BucketOwnerRead: "bucket-owner-read",
  BucketOwnerFullControl: "bucket-owner-full-control",
  AwsExecRead: "aws-exec-read",
} as const;
export type ObjectAcl2 = (typeof ObjectAcl2)[keyof typeof ObjectAcl2] | (string & {});

export const objectAcl2Schema: EnumSchema<ObjectAcl2> = s.enumOf<ObjectAcl2>(ObjectAcl2);
