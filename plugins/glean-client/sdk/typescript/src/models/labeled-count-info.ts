import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countInfoSchema, type CountInfo } from "./count-info.js";

export type LabeledCountInfo = {
  /** Label for the included count information. */
  label: string;
  /** List of data points for counts for a given date period. */
  countInfo?: CountInfo[];
};

export const labeledCountInfoSchema: Schema<LabeledCountInfo> = s.object<LabeledCountInfo>({
  label: s.string(),
  countInfo: s.optional(s.array(s.lazy(() => countInfoSchema))),
});
