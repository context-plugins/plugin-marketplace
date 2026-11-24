import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dimensionSchema, type Dimension } from "./dimension.js";
import { optimizeSchema, type Optimize } from "./optimize.js";
import { source2Schema, type Source2 } from "./source2.js";

export type Metric = {
  /** Name of the Metric */
  name: string;
  /**
   * Unique key by Project, can be used in the SDK / API to reference by 'key' rather than _id. Must
   * only contain lower-case characters and `_`, `-` or `.`.
   */
  key: string;
  /** Metric description. */
  description?: string;
  /** A unique Metric ID */
  id: string;
  /** The Project owning the Metric */
  project: string;
  /** Source that created the Metric */
  source?: Source2;
  /** Event associated with metric */
  event: string;
  /** Metric dimension */
  dimension: Dimension;
  /** Indicates whether the metric is optimized for increase or decreasae */
  optimize: Optimize;
  /** The date the Metric was created */
  createdAt: Date;
  /** The date the Metric was last updated */
  updatedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const metricProperties: s.Shape<Metric> = {
  name: s.string(),
  key: s.string(),
  description: s.optional(s.string()),
  id: s.string(),
  project: s.string(),
  source: s.optional(s.lazy(() => source2Schema)),
  event: s.string(),
  dimension: dimensionSchema,
  optimize: optimizeSchema,
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  _keysMap: {
    id: "_id",
    project: "_project",
  },
};

export const metricInternalSchema: Schema<Metric> = s.object<Metric>(metricProperties, {
  additionalProperties: s.json(),
});

export const metricSchema: Schema<Metric> = s.lazySchema(() =>
  s.object<Metric>(
    {
      ...metricProperties,
      name: s.string().check(s.minLength(1), s.maxLength(100)),
      key: s.string().check(s.minLength(1), s.maxLength(100), s.pattern("^[a-z0-9-_.]+$")),
      description: s.optional(s.string().check(s.maxLength(1000))),
    },
    { additionalProperties: s.json() },
  ),
);
