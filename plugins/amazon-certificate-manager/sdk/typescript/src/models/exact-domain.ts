import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether validation applies to the exact domain. */
export const ExactDomain = {
  Enabled: "ENABLED",
  Disabled: "DISABLED",
} as const;
export type ExactDomain = (typeof ExactDomain)[keyof typeof ExactDomain] | (string & {});

export const exactDomainSchema: EnumSchema<ExactDomain> = s.enumOf<ExactDomain>(ExactDomain);
