import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dimensionSchema, type Dimension } from "./dimension.js";
import { optimizeSchema, type Optimize } from "./optimize.js";

export type CreateMetricDto = {
  /** Name of the Metric */
  name: string;
  /**
   * Unique key by Project, can be used in the SDK / API to reference by 'key' rather than _id. Must
   * only contain lower-case characters and `_`, `-` or `.`.
   */
  key: string;
  /** Metric description. */
  description?: string;
  /** Event associated with metric */
  event: string;
  /** Metric dimension */
  dimension: Dimension;
  /** Indicates whether the metric is optimized for increase or decreasae */
  optimize: Optimize;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createMetricDtoProperties: s.Shape<CreateMetricDto> = {
  name: s.string(),
  key: s.string(),
  description: s.optional(s.string()),
  event: s.string(),
  dimension: dimensionSchema,
  optimize: optimizeSchema,
};

export const createMetricDtoInternalSchema: Schema<CreateMetricDto> = s.object<CreateMetricDto>(
  createMetricDtoProperties,
  { additionalProperties: s.json() },
);

export const createMetricDtoSchema: Schema<CreateMetricDto> = s.lazySchema(() =>
  s.object<CreateMetricDto>(
    {
      ...createMetricDtoProperties,
      name: s.string().check(s.minLength(1), s.maxLength(100)),
      key: s.string().check(s.minLength(1), s.maxLength(100), s.pattern("^[a-z0-9-_.]+$")),
      description: s.optional(s.string().check(s.maxLength(1000))),
    },
    { additionalProperties: s.json() },
  ),
);
