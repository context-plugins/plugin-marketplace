import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of prevalidation used. */
export const PrevalidationType = {
  DnsPrevalidation: "DNS_PREVALIDATION",
} as const;
export type PrevalidationType = (typeof PrevalidationType)[keyof typeof PrevalidationType] | (string & {});

export const prevalidationTypeSchema: EnumSchema<PrevalidationType> =
  s.enumOf<PrevalidationType>(PrevalidationType);
