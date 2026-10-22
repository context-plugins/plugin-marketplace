import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { iterationRepSchema, type IterationRep } from "./iteration-rep.js";
import { linkSchema, type Link } from "./link.js";

export type Experiment = {
  /** The experiment ID */
  id?: string;
  /** The experiment key */
  key: string;
  /** The experiment name */
  name: string;
  /** The experiment description */
  description?: string;
  /** The ID of the member who maintains this experiment. */
  maintainerId: string;
  creationDate: number;
  environmentKey: string;
  archivedDate?: number;
  /** Tags for the experiment */
  tags?: string[];
  /** The location and content type of related resources */
  links: Record<string, Link>;
  /** The holdout ID */
  holdoutId?: string;
  currentIteration?: IterationRep;
  draftIteration?: IterationRep;
  /** Details on the previous iterations for this experiment. */
  previousIterations?: IterationRep[];
};

export const experimentSchema: Schema<Experiment> = s.object<Experiment>({
  id: s.optional(s.string()),
  key: s.string(),
  name: s.string(),
  description: s.optional(s.string()),
  maintainerId: s.string(),
  creationDate: s.int(),
  environmentKey: s.string(),
  archivedDate: s.optional(s.int()),
  tags: s.optional(s.array(s.string())),
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  holdoutId: s.optional(s.string()),
  currentIteration: s.optional(s.lazy(() => iterationRepSchema)),
  draftIteration: s.optional(s.lazy(() => iterationRepSchema)),
  previousIterations: s.optional(s.array(s.lazy(() => iterationRepSchema))),
  _keysMap: {
    id: "_id",
    maintainerId: "_maintainerId",
    creationDate: "_creationDate",
    links: "_links",
  },
});
