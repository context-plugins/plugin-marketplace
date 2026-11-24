import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusDeliverdDevFlowsApi = {
  Open: "open",
  Complete: "complete",
  Cancelled: "cancelled",
} as const;
export type StatusDeliverdDevFlowsApi =
  | (typeof StatusDeliverdDevFlowsApi)[keyof typeof StatusDeliverdDevFlowsApi]
  | (string & {});

export const statusDeliverdDevFlowsApiSchema: EnumSchema<StatusDeliverdDevFlowsApi> =
  s.enumOf<StatusDeliverdDevFlowsApi>(StatusDeliverdDevFlowsApi);
