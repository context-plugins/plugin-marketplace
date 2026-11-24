import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cloudDiagramImportStateSchema, type CloudDiagramImportState } from "./cloud-diagram-import-state.js";
import { cloudDiagramStatsChangeSchema, type CloudDiagramStatsChange } from "./cloud-diagram-stats-change.js";
import { type7Schema, type Type7 } from "./type7.js";

/** Diagram with activity stats for a given time period. */
export type CloudDiagramStats = {
  /** ID of the diagram. */
  id?: string;
  /** ID of the layer the diagram belongs to. */
  ssId?: string;
  /** Name of the diagram. */
  name?: string;
  /** Type of the diagram. */
  type?: Type7;
  /** Cloud account name. */
  accountName?: string;
  /** Cloud account ID. */
  accountId?: string;
  /** Cloud account type. */
  accountType?: string;
  /** Activity changes within the period. */
  changes?: CloudDiagramStatsChange[];
  /** Current import/sync state for a cloud-connected diagram. */
  import?: CloudDiagramImportState;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudDiagramStatsSchema: Schema<CloudDiagramStats> = s.object<CloudDiagramStats>(
  {
    id: s.optional(s.string()),
    ssId: s.optional(s.string()),
    name: s.optional(s.string()),
    type: s.optional(s.lazy(() => type7Schema)),
    accountName: s.optional(s.string()),
    accountId: s.optional(s.string()),
    accountType: s.optional(s.string()),
    changes: s.optional(s.array(s.lazy(() => cloudDiagramStatsChangeSchema))),
    import: s.optional(s.lazy(() => cloudDiagramImportStateSchema)),
    _keysMap: {
      id: "_id",
      ssId: "ss_id",
      accountName: "account_name",
      accountId: "account_id",
      accountType: "account_type",
    },
  },
  { additionalProperties: s.json() },
);
