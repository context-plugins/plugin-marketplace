import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  groupByDiagnosticsV4GroupByOutcomeDtoSchema,
  type GroupByDiagnosticsV4GroupByOutcomeDto,
} from "./group-by-diagnostics-v4-group-by-outcome-dto.js";

export type GroupByDiagnosticsV4Group = {
  group?: string;
  rowsTested?: number;
  status?: GroupByDiagnosticsV4GroupByOutcomeDto;
  value?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const groupByDiagnosticsV4GroupSchema: Schema<GroupByDiagnosticsV4Group> =
  s.object<GroupByDiagnosticsV4Group>(
    {
      group: s.optional(s.string()),
      rowsTested: s.optional(s.int()),
      status: s.optional(s.lazy(() => groupByDiagnosticsV4GroupByOutcomeDtoSchema)),
      value: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
