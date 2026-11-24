import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { createdBySchema, type CreatedBy } from "./created-by.js";
import { statsSchema, type Stats } from "./stats.js";
import { statusSchema, type Status } from "./status.js";
import { templateSchema, type Template } from "./template.js";

export type BulkCampaign = {
  id?: string;
  name?: string;
  status?: Status;
  template?: Template | null;
  /** Percentage 0-100 */
  progress?: number;
  stats?: Stats;
  startedAt?: Date | null;
  completedAt?: Date | null;
  cancelledAt?: Date | null;
  createdAt?: Date;
  createdBy?: CreatedBy;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bulkCampaignSchema: Schema<BulkCampaign> = s.object<BulkCampaign>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusSchema)),
    template: s.optionalNullable(s.lazy(() => templateSchema)),
    progress: s.optional(s.int()),
    stats: s.optional(s.lazy(() => statsSchema)),
    startedAt: s.optionalNullable(s.dateTime()),
    completedAt: s.optionalNullable(s.dateTime()),
    cancelledAt: s.optionalNullable(s.dateTime()),
    createdAt: s.optional(s.dateTime()),
    createdBy: s.optional(s.lazy(() => createdBySchema)),
    _keysMap: {
      startedAt: "started_at",
      completedAt: "completed_at",
      cancelledAt: "cancelled_at",
      createdAt: "created_at",
      createdBy: "created_by",
    },
  },
  { additionalProperties: s.json() },
);
