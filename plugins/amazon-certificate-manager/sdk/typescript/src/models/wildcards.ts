import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether validation applies to wildcard domains. */
export const Wildcards = {
  Enabled: "ENABLED",
  Disabled: "DISABLED",
} as const;
export type Wildcards = (typeof Wildcards)[keyof typeof Wildcards] | (string & {});

export const wildcardsSchema: EnumSchema<Wildcards> = s.enumOf<Wildcards>(Wildcards);
