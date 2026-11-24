import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Filter by the entity that manages the certificate. */
export const ManagedBy1 = {
  Cloudfront: "CLOUDFRONT",
} as const;
export type ManagedBy1 = (typeof ManagedBy1)[keyof typeof ManagedBy1] | (string & {});

export const managedBy1Schema: EnumSchema<ManagedBy1> = s.enumOf<ManagedBy1>(ManagedBy1);
