import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusJuriSignSignRequestsApi = {
  Draft: "draft",
  Pending: "pending",
  Completed: "completed",
  Cancelled: "cancelled",
  Expired: "expired",
} as const;
export type StatusJuriSignSignRequestsApi =
  | (typeof StatusJuriSignSignRequestsApi)[keyof typeof StatusJuriSignSignRequestsApi]
  | (string & {});

export const statusJuriSignSignRequestsApiSchema: EnumSchema<StatusJuriSignSignRequestsApi> =
  s.enumOf<StatusJuriSignSignRequestsApi>(StatusJuriSignSignRequestsApi);
