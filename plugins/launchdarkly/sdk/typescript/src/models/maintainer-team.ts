import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type MaintainerTeam = {
  /** The key of the maintainer team */
  key: string;
  /** A human-friendly name for the maintainer team */
  name: string;
  /** The location and content type of related resources */
  links?: Record<string, Link>;
};

export const maintainerTeamSchema: Schema<MaintainerTeam> = s.object<MaintainerTeam>({
  key: s.string(),
  name: s.string(),
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  _keysMap: {
    links: "_links",
  },
});
