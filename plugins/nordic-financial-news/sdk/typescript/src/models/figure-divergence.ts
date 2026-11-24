import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { groupSchema, type Group } from "./group.js";

/**
 * Detail behind `member_figures_disagree`: the specific metrics whose values disagree across member
 * articles, with the per-source figures and range. Null when there is no disagreement; omitted on a
 * tombstone.
 */
export type FigureDivergence = {
  /** One entry per disagreeing metric. */
  groups?: Group[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const figureDivergenceSchema: Schema<FigureDivergence> = s.object<FigureDivergence>(
  {
    groups: s.optional(s.array(s.lazy(() => groupSchema))),
  },
  { additionalProperties: s.json() },
);
