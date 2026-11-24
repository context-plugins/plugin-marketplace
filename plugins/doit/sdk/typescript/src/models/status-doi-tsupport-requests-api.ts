import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status to set on the request. */
export const StatusDoiTSupportRequestsApi = {
  Open: "open",
  Pending: "pending",
  Hold: "hold",
  Solved: "solved",
} as const;
export type StatusDoiTSupportRequestsApi =
  | (typeof StatusDoiTSupportRequestsApi)[keyof typeof StatusDoiTSupportRequestsApi]
  | (string & {});

export const statusDoiTSupportRequestsApiSchema: EnumSchema<StatusDoiTSupportRequestsApi> =
  s.enumOf<StatusDoiTSupportRequestsApi>(StatusDoiTSupportRequestsApi);
