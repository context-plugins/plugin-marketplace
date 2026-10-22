import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";
import { projectSchema, type Project } from "./project.js";

export type Projects = {
  /** A link to this resource. */
  links: Record<string, Link>;
  /** List of projects. */
  items: Project[];
  totalCount?: number;
};

export const projectsSchema: Schema<Projects> = s.object<Projects>({
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  items: s.array(s.lazy(() => projectSchema)),
  totalCount: s.optional(s.int()),
  _keysMap: {
    links: "_links",
  },
});
