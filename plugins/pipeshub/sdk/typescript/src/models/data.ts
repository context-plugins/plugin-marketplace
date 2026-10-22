import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { byRecordTypeSchema, type ByRecordType } from "./by-record-type.js";
import { statsSchema, type Stats } from "./stats.js";

export type Data = {
  orgId: string;
  connectorId: string;
  /** Where the records come from; `CONNECTOR` for a connector. */
  origin: string;
  stats: Stats;
  /** The same counts per record type; empty before the first sync. */
  byRecordType: ByRecordType[];
};

export const dataSchema: Schema<Data> = s.object<Data>({
  orgId: s.string(),
  connectorId: s.string(),
  origin: s.string(),
  stats: statsSchema,
  byRecordType: s.array(s.lazy(() => byRecordTypeSchema)),
});
