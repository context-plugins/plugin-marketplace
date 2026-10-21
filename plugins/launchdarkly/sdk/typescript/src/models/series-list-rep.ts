import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SeriesListRep = {
  /** The location and content type of related resources */
  links: Record<string, Record<string, unknown>>;
  /** Metadata about each series */
  metadata: Record<string, unknown>[];
  /**
   * An array of data points with timestamps. Each element of the array is an object with a 'time'
   * field, whose value is the timestamp, and one or more key fields. If there are multiple key
   * fields, they are labeled '0', '1', and so on, and are explained in the <code>metadata</code>.
   */
  series: number[];
};

export const seriesListRepSchema: Schema<SeriesListRep> = s.object<SeriesListRep>({
  links: s.record(s.string(), s.record(s.string(), s.unknown())),
  metadata: s.array(s.record(s.string(), s.unknown())),
  series: s.array(s.int()),
  _keysMap: {
    links: "_links",
  },
});
