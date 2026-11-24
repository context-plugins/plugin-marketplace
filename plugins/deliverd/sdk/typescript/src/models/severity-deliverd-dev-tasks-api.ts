import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How serious a failure of this result is: low, medium, high or critical */
export const SeverityDeliverdDevTasksApi = {
  Low: "low",
  Medium: "medium",
  High: "high",
  Critical: "critical",
} as const;
export type SeverityDeliverdDevTasksApi =
  | (typeof SeverityDeliverdDevTasksApi)[keyof typeof SeverityDeliverdDevTasksApi]
  | (string & {});

export const severityDeliverdDevTasksApiSchema: EnumSchema<SeverityDeliverdDevTasksApi> =
  s.enumOf<SeverityDeliverdDevTasksApi>(SeverityDeliverdDevTasksApi);
