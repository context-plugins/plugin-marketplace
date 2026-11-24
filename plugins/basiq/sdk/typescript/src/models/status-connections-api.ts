import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Connection status, available only for SERVER_SCOPE. */
export const StatusConnectionsApi = {
  Active: "active",
  Pending: "pending",
  Invalid: "invalid",
  PreInit: "pre-init",
} as const;
export type StatusConnectionsApi =
  | (typeof StatusConnectionsApi)[keyof typeof StatusConnectionsApi]
  | (string & {});

export const statusConnectionsApiSchema: EnumSchema<StatusConnectionsApi> =
  s.enumOf<StatusConnectionsApi>(StatusConnectionsApi);
