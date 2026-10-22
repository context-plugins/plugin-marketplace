import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessSchema, type Access } from "./access.js";
import { dependentExperimentRepSchema, type DependentExperimentRep } from "./dependent-experiment-rep.js";
import { kind2Schema, type Kind2 } from "./kind2.js";
import { linkSchema, type Link } from "./link.js";
import { maintainerRepSchema, type MaintainerRep } from "./maintainer-rep.js";
import { metricInGroupRepSchema, type MetricInGroupRep } from "./metric-in-group-rep.js";

export type MetricGroupRep = {
  /** The ID of this metric group */
  id: string;
  /** A unique key to reference the metric group */
  key: string;
  /** A human-friendly name for the metric group */
  name: string;
  /** The type of the metric group */
  kind: Kind2;
  /** Description of the metric group */
  description?: string;
  /** The location and content type of related resources */
  links: Record<string, Link>;
  access?: Access;
  /** Tags for the metric group */
  tags: string[];
  creationDate: number;
  lastModified: number;
  maintainer: MaintainerRep;
  /** An ordered list of the metrics in this metric group */
  metrics: MetricInGroupRep[];
  /** The version of this metric group */
  version: number;
  experiments?: DependentExperimentRep[];
  /** The number of experiments using this metric group */
  experimentCount?: number;
  /** The number of active experiments using this metric group */
  activeExperimentCount?: number;
  /** The number of active guarded rollouts using this metric group */
  activeGuardedRolloutCount?: number;
};

export const metricGroupRepSchema: Schema<MetricGroupRep> = s.object<MetricGroupRep>({
  id: s.string(),
  key: s.string(),
  name: s.string(),
  kind: kind2Schema,
  description: s.optional(s.string()),
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  access: s.optional(s.lazy(() => accessSchema)),
  tags: s.array(s.string()),
  creationDate: s.int(),
  lastModified: s.int(),
  maintainer: maintainerRepSchema,
  metrics: s.array(s.lazy(() => metricInGroupRepSchema)),
  version: s.int(),
  experiments: s.optional(s.array(s.lazy(() => dependentExperimentRepSchema))),
  experimentCount: s.optional(s.int()),
  activeExperimentCount: s.optional(s.int()),
  activeGuardedRolloutCount: s.optional(s.int()),
  _keysMap: {
    id: "_id",
    links: "_links",
    access: "_access",
    creationDate: "_creationDate",
    lastModified: "_lastModified",
    version: "_version",
  },
});
