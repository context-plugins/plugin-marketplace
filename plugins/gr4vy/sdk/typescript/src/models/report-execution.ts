import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reportExecutionContext1Schema, type ReportExecutionContext1 } from "./report-execution-context1.js";
import { reportExecutionStatus1Schema, type ReportExecutionStatus1 } from "./report-execution-status1.js";
import { reportSummary2Schema, type ReportSummary2 } from "./report-summary2.js";
import { Type65, type65Schema } from "./type65.js";

export type ReportExecution = {
  /** Always `report-execution`. @default Type65.ReportExecution */
  type?: Type65;
  /** The unique ID for the report execution. */
  id: string;
  /** The date this report execution was created at. */
  createdAt: Date;
  /** The date this report execution was last updated. */
  updatedAt: Date;
  /** The status of the report execution. */
  status: ReportExecutionStatus1;
  /** The context for the report execution. */
  context: ReportExecutionContext1;
  /** The report this execution belongs to. */
  report: ReportSummary2;
};

export const reportExecutionSchema: Schema<ReportExecution> = s.object<ReportExecution>({
  type: s.defaulted(type65Schema, Type65.ReportExecution),
  id: s.string(),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  status: reportExecutionStatus1Schema,
  context: reportExecutionContext1Schema,
  report: reportSummary2Schema,
  _keysMap: {
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
