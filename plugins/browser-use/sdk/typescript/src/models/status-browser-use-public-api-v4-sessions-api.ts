import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusBrowserUsePublicApiV4SessionsApi = {
  Pending: "pending",
  Dispatching: "dispatching",
  Consumed: "consumed",
  Cancelled: "cancelled",
  Superseded: "superseded",
  Failed: "failed",
} as const;
export type StatusBrowserUsePublicApiV4SessionsApi =
  | (typeof StatusBrowserUsePublicApiV4SessionsApi)[keyof typeof StatusBrowserUsePublicApiV4SessionsApi]
  | (string & {});

export const statusBrowserUsePublicApiV4SessionsApiSchema: EnumSchema<StatusBrowserUsePublicApiV4SessionsApi> =
  s.enumOf<StatusBrowserUsePublicApiV4SessionsApi>(StatusBrowserUsePublicApiV4SessionsApi);
