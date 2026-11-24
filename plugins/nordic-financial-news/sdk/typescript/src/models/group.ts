import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { valueSchema, type Value } from "./value.js";

export type Group = {
  /** The canonical measure that disagrees */
  concept?: string;
  /** Whether the measure is as-reported or an adjusted/alternative one */
  basis?: string;
  /** Whether the figure is an outcome, forecast, or comparative */
  role?: string;
  /** The reporting period the figure covers */
  period?: string;
  /** ISO currency of the figures */
  currency?: string;
  /** The source's own wording(s) for the measure */
  labels?: string[];
  /** Smallest reported value (absolute base units) */
  min?: number;
  /** Largest reported value (absolute base units) */
  max?: number;
  /** The reported figure per member article. */
  values?: Value[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const groupSchema: Schema<Group> = s.object<Group>(
  {
    concept: s.optional(s.string()),
    basis: s.optional(s.string()),
    role: s.optional(s.string()),
    period: s.optional(s.string()),
    currency: s.optional(s.string()),
    labels: s.optional(s.array(s.string())),
    min: s.optional(s.float64()),
    max: s.optional(s.float64()),
    values: s.optional(s.array(s.lazy(() => valueSchema))),
  },
  { additionalProperties: s.json() },
);
