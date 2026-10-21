import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { kind2Schema, type Kind2 } from "./kind2.js";
import { linkSchema, type Link } from "./link.js";

export type DependentMetricGroupRep = {
  /** A unique key to reference the metric group */
  key: string;
  /** A human-friendly name for the metric group */
  name: string;
  /** The type of the metric group */
  kind: Kind2;
  /** The location and content type of related resources */
  links: Record<string, Link>;
};

export const dependentMetricGroupRepSchema: Schema<DependentMetricGroupRep> =
  s.object<DependentMetricGroupRep>({
    key: s.string(),
    name: s.string(),
    kind: kind2Schema,
    links: s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
    _keysMap: {
      links: "_links",
    },
  });
