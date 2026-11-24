import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusDidlogicComRiskChecksApi = {
  Pending: "pending",
  Completed: "completed",
  Failed: "failed",
} as const;
export type StatusDidlogicComRiskChecksApi =
  | (typeof StatusDidlogicComRiskChecksApi)[keyof typeof StatusDidlogicComRiskChecksApi]
  | (string & {});

export const statusDidlogicComRiskChecksApiSchema: EnumSchema<StatusDidlogicComRiskChecksApi> =
  s.enumOf<StatusDidlogicComRiskChecksApi>(StatusDidlogicComRiskChecksApi);
