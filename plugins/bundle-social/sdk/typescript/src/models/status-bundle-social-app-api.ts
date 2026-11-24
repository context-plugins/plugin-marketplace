import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusBundleSocialAppApi = {
  Operational: "operational",
  Degraded: "degraded",
  Outage: "outage",
  Maintenance: "maintenance",
} as const;
export type StatusBundleSocialAppApi =
  | (typeof StatusBundleSocialAppApi)[keyof typeof StatusBundleSocialAppApi]
  | (string & {});

export const statusBundleSocialAppApiSchema: EnumSchema<StatusBundleSocialAppApi> =
  s.enumOf<StatusBundleSocialAppApi>(StatusBundleSocialAppApi);
