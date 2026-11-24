import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  groupByDiagnosticsV4GroupSchema,
  type GroupByDiagnosticsV4Group,
} from "./group-by-diagnostics-v4-group.js";

export type GroupByDiagnosticsV4 = {
  diagnosticsCount?: number;
  failedRowsDataQuery?: string;
  failedRowsKeysQuery?: string;
  failedRowsSourceQuery?: string;
  groups?: GroupByDiagnosticsV4Group[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const groupByDiagnosticsV4Schema: Schema<GroupByDiagnosticsV4> = s.object<GroupByDiagnosticsV4>(
  {
    diagnosticsCount: s.optional(s.int()),
    failedRowsDataQuery: s.optional(s.string()),
    failedRowsKeysQuery: s.optional(s.string()),
    failedRowsSourceQuery: s.optional(s.string()),
    groups: s.optional(s.array(s.lazy(() => groupByDiagnosticsV4GroupSchema))),
  },
  { additionalProperties: s.json() },
);
