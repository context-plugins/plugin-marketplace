import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PeopleAlsoSearchFor = {
  /** Related entity name */
  name?: string;
  /** Google search URL for this related entity */
  link?: string;
  /**
   * Google's `/goto` redirect for this link, in the absolute form `POST /v1/monitor/google/goto`
   * accepts. Present only when Google served the link as a redirect — the sibling link field holds
   * the destination cloro resolved it to.
   */
  redirectLink?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const peopleAlsoSearchForSchema: Schema<PeopleAlsoSearchFor> = s.object<PeopleAlsoSearchFor>(
  {
    name: s.optional(s.string()),
    link: s.optional(s.string()),
    redirectLink: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
