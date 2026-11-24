import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { signalSummaryDtoSchema, type SignalSummaryDto } from "./signal-summary-dto.js";

/** Paginated list of monitor summaries. */
export type MonitorSummaryListResult = {
  /** Total number of matching summaries across all pages. */
  total: number;
  /** Summaries returned for the requested page. */
  data: SignalSummaryDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const monitorSummaryListResultSchema: Schema<MonitorSummaryListResult> =
  s.object<MonitorSummaryListResult>(
    {
      total: s.int(),
      data: s.array(s.lazy(() => signalSummaryDtoSchema)),
    },
    { additionalProperties: s.json() },
  );
