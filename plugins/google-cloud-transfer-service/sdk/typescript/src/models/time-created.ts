import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies how each object's `timeCreated` metadata is preserved for transfers. If unspecified,
 * the default behavior is the same as TIME_CREATED_SKIP. This behavior is supported for transfers
 * to Cloud Storage buckets from Cloud Storage, Amazon S3, S3-compatible storage, and Azure sources.
 */
export const TimeCreated = {
  TimeCreatedUnspecified: "TIME_CREATED_UNSPECIFIED",
  TimeCreatedSkip: "TIME_CREATED_SKIP",
  TimeCreatedPreserveAsCustomTime: "TIME_CREATED_PRESERVE_AS_CUSTOM_TIME",
} as const;
export type TimeCreated = (typeof TimeCreated)[keyof typeof TimeCreated] | (string & {});

export const timeCreatedSchema: EnumSchema<TimeCreated> = s.enumOf<TimeCreated>(TimeCreated);
