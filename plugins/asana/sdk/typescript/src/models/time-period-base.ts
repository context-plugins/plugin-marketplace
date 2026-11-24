import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { periodSchema, type Period } from "./period.js";
import { timePeriodCompactSchema, type TimePeriodCompact } from "./time-period-compact.js";

export type TimePeriodBase = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /** The localized end date of the time period in `YYYY-MM-DD` format. */
  endOn?: string;
  /** The localized start date of the time period in `YYYY-MM-DD` format. */
  startOn?: string;
  /**
   * The cadence and index of the time period. The value is one of: `FY`, `H1`, `H2`, `Q1`, `Q2`,
   * `Q3`, or `Q4`.
   */
  period?: Period;
  /** A string representing the cadence code and the fiscal year. */
  displayName?: string;
  parent?: TimePeriodCompact;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const timePeriodBaseSchema: Schema<TimePeriodBase> = s.object<TimePeriodBase>(
  {
    gid: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    endOn: s.optional(s.string()),
    startOn: s.optional(s.string()),
    period: s.optional(s.lazy(() => periodSchema)),
    displayName: s.optional(s.string()),
    parent: s.optional(s.lazy(() => timePeriodCompactSchema)),
    _keysMap: {
      resourceType: "resource_type",
      endOn: "end_on",
      startOn: "start_on",
      displayName: "display_name",
    },
  },
  { additionalProperties: s.json() },
);
