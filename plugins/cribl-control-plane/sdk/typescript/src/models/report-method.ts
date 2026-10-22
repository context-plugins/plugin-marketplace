import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Target of the ingestion status reporting. Defaults to Queue. */
export const ReportMethod = {
  Queue: "queue",
  Table: "table",
  QueueAndTable: "queueAndTable",
} as const;
export type ReportMethod = (typeof ReportMethod)[keyof typeof ReportMethod] | (string & {});

export const reportMethodSchema: EnumSchema<ReportMethod> = s.enumOf<ReportMethod>(ReportMethod);
