import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";
import { teamSchema, type Team } from "./team.js";

export type Teams = {
  /** An array of teams */
  items: Team[];
  /** The location and content type of related resources */
  links?: Record<string, Link>;
  /** The number of teams */
  totalCount?: number;
};

export const teamsSchema: Schema<Teams> = s.object<Teams>({
  items: s.array(s.lazy(() => teamSchema)),
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  totalCount: s.optional(s.int()),
  _keysMap: {
    links: "_links",
  },
});
