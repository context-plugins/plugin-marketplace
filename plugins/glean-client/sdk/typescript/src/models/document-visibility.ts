import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The level of visibility of the document as understood by our system. */
export const DocumentVisibility = {
  Private: "PRIVATE",
  SpecificPeopleAndGroups: "SPECIFIC_PEOPLE_AND_GROUPS",
  DomainLink: "DOMAIN_LINK",
  DomainVisible: "DOMAIN_VISIBLE",
  PublicLink: "PUBLIC_LINK",
  PublicVisible: "PUBLIC_VISIBLE",
} as const;
export type DocumentVisibility = (typeof DocumentVisibility)[keyof typeof DocumentVisibility] | (string & {});

export const documentVisibilitySchema: EnumSchema<DocumentVisibility> =
  s.enumOf<DocumentVisibility>(DocumentVisibility);
