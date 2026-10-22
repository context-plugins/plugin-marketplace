import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type ProjectSummary = {
  /** The ID of this project */
  id: string;
  /** The location and content type of related resources */
  links: Record<string, Link>;
  /** The project key */
  key: string;
  /** The project name */
  name: string;
};

export const projectSummarySchema: Schema<ProjectSummary> = s.object<ProjectSummary>({
  id: s.string(),
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  key: s.string(),
  name: s.string(),
  _keysMap: {
    id: "_id",
    links: "_links",
  },
});
