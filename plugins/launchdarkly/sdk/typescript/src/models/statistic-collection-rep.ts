import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type StatisticCollectionRep = {
  /**
   * A map of flag keys to a list of code reference statistics for each code repository in which the
   * flag key appears
   */
  flags: Record<string, Record<string, unknown>>;
  /** The location and content type of related resources */
  links: Record<string, Link>;
};

export const statisticCollectionRepSchema: Schema<StatisticCollectionRep> = s.object<StatisticCollectionRep>({
  flags: s.record(s.string(), s.record(s.string(), s.unknown())),
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  _keysMap: {
    links: "_links",
  },
});
