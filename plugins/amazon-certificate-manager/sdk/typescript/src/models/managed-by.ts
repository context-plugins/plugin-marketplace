import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Identifies the Amazon Web Services service that manages the certificate issued by ACM. */
export const ManagedBy = {
  Cloudfront: "CLOUDFRONT",
} as const;
export type ManagedBy = (typeof ManagedBy)[keyof typeof ManagedBy] | (string & {});

export const managedBySchema: EnumSchema<ManagedBy> = s.enumOf<ManagedBy>(ManagedBy);
