import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";
import { memberSchema, type Member } from "./member.js";

export type Members = {
  /** An array of members */
  items: Member[];
  /** The location and content type of related resources */
  links: Record<string, Link>;
  /** The number of members returned */
  totalCount?: number;
};

export const membersSchema: Schema<Members> = s.object<Members>({
  items: s.array(s.lazy(() => memberSchema)),
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  totalCount: s.optional(s.int()),
  _keysMap: {
    links: "_links",
  },
});
