import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type DependentExperimentRep = {
  /** The experiment key */
  key: string;
  /** The experiment name */
  name: string;
  /** The environment ID */
  environmentId: string;
  /** The environment key */
  environmentKey: string;
  creationDate: number;
  archivedDate?: number;
  /** The location and content type of related resources */
  links: Record<string, Link>;
};

export const dependentExperimentRepSchema: Schema<DependentExperimentRep> = s.object<DependentExperimentRep>({
  key: s.string(),
  name: s.string(),
  environmentId: s.string(),
  environmentKey: s.string(),
  creationDate: s.int(),
  archivedDate: s.optional(s.int()),
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  _keysMap: {
    links: "_links",
  },
});
