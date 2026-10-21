import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Object ACL to assign to uploaded objects */
export const ObjectAcl10 = {
  Private: "private",
  BucketOwnerRead: "bucket-owner-read",
  BucketOwnerFullControl: "bucket-owner-full-control",
  ProjectPrivate: "project-private",
  AuthenticatedRead: "authenticated-read",
  PublicRead: "public-read",
} as const;
export type ObjectAcl10 = (typeof ObjectAcl10)[keyof typeof ObjectAcl10] | (string & {});

export const objectAcl10Schema: EnumSchema<ObjectAcl10> = s.enumOf<ObjectAcl10>(ObjectAcl10);
