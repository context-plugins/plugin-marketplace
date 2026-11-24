import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The reason for the exception. */
export const Reason3 = {
  DependencyServiceQuotaExceeded: "DEPENDENCY_SERVICE_QUOTA_EXCEEDED",
} as const;
export type Reason3 = (typeof Reason3)[keyof typeof Reason3] | (string & {});

export const reason3Schema: EnumSchema<Reason3> = s.enumOf<Reason3>(Reason3);
