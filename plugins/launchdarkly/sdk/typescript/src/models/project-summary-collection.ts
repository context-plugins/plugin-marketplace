import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";
import { projectSummarySchema, type ProjectSummary } from "./project-summary.js";

export type ProjectSummaryCollection = {
  totalCount: number;
  items: ProjectSummary[];
  links?: Record<string, Link>;
};

export const projectSummaryCollectionSchema: Schema<ProjectSummaryCollection> =
  s.object<ProjectSummaryCollection>({
    totalCount: s.int(),
    items: s.array(s.lazy(() => projectSummarySchema)),
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
