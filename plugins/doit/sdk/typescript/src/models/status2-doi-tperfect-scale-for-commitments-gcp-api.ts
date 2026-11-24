import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status2DoiTPerfectScaleForCommitmentsGcpApi = {
  Active: "active",
  Expired: "expired",
  Creating: "creating",
  Pending: "pending",
  Cancelled: "cancelled",
  NotYetActive: "not_yet_active",
} as const;
export type Status2DoiTPerfectScaleForCommitmentsGcpApi =
  | (typeof Status2DoiTPerfectScaleForCommitmentsGcpApi)[keyof typeof Status2DoiTPerfectScaleForCommitmentsGcpApi]
  | (string & {});

export const status2DoiTPerfectScaleForCommitmentsGcpApiSchema: EnumSchema<Status2DoiTPerfectScaleForCommitmentsGcpApi> =
  s.enumOf<Status2DoiTPerfectScaleForCommitmentsGcpApi>(Status2DoiTPerfectScaleForCommitmentsGcpApi);
