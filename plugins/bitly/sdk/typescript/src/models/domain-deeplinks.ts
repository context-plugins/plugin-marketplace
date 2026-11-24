import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DomainDeeplinks = {
  On: "on",
  Off: "off",
  Both: "both",
} as const;
export type DomainDeeplinks = (typeof DomainDeeplinks)[keyof typeof DomainDeeplinks] | (string & {});

export const domainDeeplinksSchema: EnumSchema<DomainDeeplinks> = s.enumOf<DomainDeeplinks>(DomainDeeplinks);
