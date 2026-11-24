import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether validation applies to subdomains. */
export const Subdomains = {
  Enabled: "ENABLED",
  Disabled: "DISABLED",
} as const;
export type Subdomains = (typeof Subdomains)[keyof typeof Subdomains] | (string & {});

export const subdomainsSchema: EnumSchema<Subdomains> = s.enumOf<Subdomains>(Subdomains);
