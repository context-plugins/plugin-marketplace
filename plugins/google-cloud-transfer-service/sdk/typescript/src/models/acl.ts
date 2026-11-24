import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies how each object's ACLs should be preserved for transfers between Google Cloud Storage
 * buckets. If unspecified, the default behavior is the same as ACL_DESTINATION_BUCKET_DEFAULT.
 */
export const Acl = {
  AclUnspecified: "ACL_UNSPECIFIED",
  AclDestinationBucketDefault: "ACL_DESTINATION_BUCKET_DEFAULT",
  AclPreserve: "ACL_PRESERVE",
} as const;
export type Acl = (typeof Acl)[keyof typeof Acl] | (string & {});

export const aclSchema: EnumSchema<Acl> = s.enumOf<Acl>(Acl);
