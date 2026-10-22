import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reportSchedule1Schema, type ReportSchedule1 } from "./report-schedule1.js";
import { reportSpec2Schema, type ReportSpec2 } from "./report-spec2.js";
import { Type64, type64Schema } from "./type64.js";
import { creatorDisplayNameSchema, type CreatorDisplayName } from "./unions/creator-display-name.js";
import { creatorIdSchema, type CreatorId } from "./unions/creator-id.js";
import { creatorTypeSchema, type CreatorType } from "./unions/creator-type.js";
import { description2Schema, type Description2 } from "./unions/description2.js";
import { latestExecutionSchema, type LatestExecution } from "./unions/latest-execution.js";
import { nextExecutionAtSchema, type NextExecutionAt } from "./unions/next-execution-at.js";

export type Report = {
  /** Always `report`. @default Type64.Report */
  type?: Type64;
  /** The unique ID for the report. */
  id: string;
  /** The merchant account ID this report belongs to. */
  merchantAccountId: string;
  /** The name of the report. */
  name: string;
  /** The ID of the user who created the report. */
  creatorId?: CreatorId;
  /** The display name of the report creator. */
  creatorDisplayName?: CreatorDisplayName;
  /** The type of the report creator. */
  creatorType?: CreatorType;
  /** The date this report was created at. */
  createdAt: Date;
  /** The date this report was last updated. */
  updatedAt: Date;
  /** The next scheduled execution time for the report. */
  nextExecutionAt?: NextExecutionAt;
  /** A description of the report. */
  description?: Description2;
  /** The schedule for the report. */
  schedule: ReportSchedule1;
  /** Whether the report schedule is enabled. */
  scheduleEnabled: boolean;
  /** The timezone for the report schedule. */
  scheduleTimezone: string;
  /** The report specification. */
  spec: ReportSpec2;
  /** The latest execution summary for the report. */
  latestExecution?: LatestExecution;
};

export const reportSchema: Schema<Report> = s.object<Report>({
  type: s.defaulted(type64Schema, Type64.Report),
  id: s.string(),
  merchantAccountId: s.string(),
  name: s.string(),
  creatorId: s.optional(s.lazy(() => creatorIdSchema)),
  creatorDisplayName: s.optional(s.lazy(() => creatorDisplayNameSchema)),
  creatorType: s.optional(s.lazy(() => creatorTypeSchema)),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  nextExecutionAt: s.optional(s.lazy(() => nextExecutionAtSchema)),
  description: s.optional(s.lazy(() => description2Schema)),
  schedule: reportSchedule1Schema,
  scheduleEnabled: s.boolean(),
  scheduleTimezone: s.string(),
  spec: reportSpec2Schema,
  latestExecution: s.optional(s.lazy(() => latestExecutionSchema)),
  _keysMap: {
    merchantAccountId: "merchant_account_id",
    creatorId: "creator_id",
    creatorDisplayName: "creator_display_name",
    creatorType: "creator_type",
    createdAt: "created_at",
    updatedAt: "updated_at",
    nextExecutionAt: "next_execution_at",
    scheduleEnabled: "schedule_enabled",
    scheduleTimezone: "schedule_timezone",
    latestExecution: "latest_execution",
  },
});
