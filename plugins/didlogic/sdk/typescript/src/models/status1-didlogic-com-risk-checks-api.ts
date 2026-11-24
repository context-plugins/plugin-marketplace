import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Task status */
export const Status1DidlogicComRiskChecksApi = {
  Pending: "pending",
  Completed: "completed",
  Failed: "failed",
} as const;
export type Status1DidlogicComRiskChecksApi =
  | (typeof Status1DidlogicComRiskChecksApi)[keyof typeof Status1DidlogicComRiskChecksApi]
  | (string & {});

export const status1DidlogicComRiskChecksApiSchema: EnumSchema<Status1DidlogicComRiskChecksApi> =
  s.enumOf<Status1DidlogicComRiskChecksApi>(Status1DidlogicComRiskChecksApi);
