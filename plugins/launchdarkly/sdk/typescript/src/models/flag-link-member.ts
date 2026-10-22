import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type FlagLinkMember = {
  links: Record<string, Link>;
  id: string;
  firstName?: string;
  lastName?: string;
};

export const flagLinkMemberSchema: Schema<FlagLinkMember> = s.object<FlagLinkMember>({
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  id: s.string(),
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  _keysMap: {
    links: "_links",
    id: "_id",
  },
});
