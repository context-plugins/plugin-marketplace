import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the domain: REGISTERED – The domain is properly registered and available. You can
 * use this domain for registering types and creating new workflow executions. DEPRECATED – The
 * domain was deprecated using DeprecateDomain, but is still in use. You should not create new
 * workflow executions in this domain.
 */
export const Status2 = {
  Registered: "REGISTERED",
  Deprecated: "DEPRECATED",
} as const;
export type Status2 = (typeof Status2)[keyof typeof Status2] | (string & {});

export const status2Schema: EnumSchema<Status2> = s.enumOf<Status2>(Status2);
