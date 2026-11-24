import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dateModelSchema, type DateModel } from "./date-model.js";
import { nameSchema, type Name } from "./name.js";
import { rangeSchema, type Range } from "./range.js";
import { roundSchema, type Round } from "./round.js";

/**
 * All funding sub-filters live under this single object. Every field is optional; combine any
 * subset.
 */
export type Funding = {
  isIpo?: boolean;
  ranges?: Range[];
  date?: DateModel;
  rounds?: Round[];
  names?: Name[];
  /** Free text. Accepted but not currently applied downstream. */
  investors?: string[];
  /** Legacy free text. Accepted but not currently applied downstream. */
  types?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fundingSchema: Schema<Funding> = s.object<Funding>(
  {
    isIpo: s.optional(s.boolean()),
    ranges: s.optional(s.array(s.lazy(() => rangeSchema))),
    date: s.optional(s.lazy(() => dateModelSchema)),
    rounds: s.optional(s.array(s.lazy(() => roundSchema))),
    names: s.optional(s.array(s.lazy(() => nameSchema))),
    investors: s.optional(s.array(s.string())),
    types: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
