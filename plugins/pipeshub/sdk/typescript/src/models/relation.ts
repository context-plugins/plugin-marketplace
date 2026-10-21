import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Relation = {
  MentionedIn: "mentionedIn",
  LinksTo: "linksTo",
} as const;
export type Relation = (typeof Relation)[keyof typeof Relation] | (string & {});

export const relationSchema: EnumSchema<Relation> = s.enumOf<Relation>(Relation);
