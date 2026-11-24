import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { segmentStatsSchema, type SegmentStats } from "./segment-stats.js";
import { segmentStatusSchema, type SegmentStatus } from "./segment-status.js";
import { SegmentType, segmentTypeSchema } from "./segment-type.js";

/** The segment object. To expand results, see the results endpoint. */
export type Segment = {
  /** The prefixed ID of the segment. */
  id: string;
  /** The name of the segment. */
  name: string;
  /**
   * The type of segment.<br>`dynamic` - The segment is recalculated at set intervals.<br>`static` -
   * The segment is calculated once at creation.<br>`manual` - The segment is not calculated at all.
   * The results are created via CSV.
   *
   * @default SegmentType.All
   */
  type?: SegmentType;
  /** The time the Segment was last calculated. Measured in seconds since the Unix epoch */
  lastCalculated?: number;
  /** The total number of subscriptions that belong in the segment from the last calculation. */
  totalResults: number;
  /**
   * The status of the segment's most recent calculation.<br>`pending` - The segment has not been
   * calculated yet.<br>`processing` - The calculation is in progress, and has not
   * completed.<br>`completed` - The calculation was successful.<br>`failed` - Something went wrong
   * during the calculation.
   */
  status: SegmentStatus;
  /**
   * Dynamic segments are marked inactive if they haven't been used in a specific period of time.
   * Inactive segments will not automatically be recalculated.
   */
  active: boolean;
  stats?: SegmentStats;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const segmentSchema: Schema<Segment> = s.object<Segment>(
  {
    id: s.string(),
    name: s.string(),
    type: s.defaulted(segmentTypeSchema, SegmentType.All),
    lastCalculated: s.optional(s.int()),
    totalResults: s.int(),
    status: segmentStatusSchema,
    active: s.boolean(),
    stats: s.optional(s.lazy(() => segmentStatsSchema)),
    _keysMap: {
      lastCalculated: "last_calculated",
      totalResults: "total_results",
    },
  },
  { additionalProperties: s.json() },
);
