import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type StatisticsRoot = {
  /** The location and content type of all projects that have code references */
  projects?: Link[];
  self?: Link;
};

export const statisticsRootSchema: Schema<StatisticsRoot> = s.object<StatisticsRoot>({
  projects: s.optional(s.array(s.lazy(() => linkSchema))),
  self: s.optional(s.lazy(() => linkSchema)),
});
