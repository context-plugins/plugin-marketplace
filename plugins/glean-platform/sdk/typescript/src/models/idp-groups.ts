import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How to resolve effective usage limits when a user belongs to multiple IdP groups. */
export const IdpGroups = {
  Highest: "HIGHEST",
  Lowest: "LOWEST",
} as const;
export type IdpGroups = (typeof IdpGroups)[keyof typeof IdpGroups] | (string & {});

export const idpGroupsSchema: EnumSchema<IdpGroups> = s.enumOf<IdpGroups>(IdpGroups);
