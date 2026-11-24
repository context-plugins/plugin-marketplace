import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const KindDeliverdDevFlowsApi = {
  Approval: "approval",
  Review: "review",
  Collection: "collection",
  Report: "report",
} as const;
export type KindDeliverdDevFlowsApi =
  | (typeof KindDeliverdDevFlowsApi)[keyof typeof KindDeliverdDevFlowsApi]
  | (string & {});

export const kindDeliverdDevFlowsApiSchema: EnumSchema<KindDeliverdDevFlowsApi> =
  s.enumOf<KindDeliverdDevFlowsApi>(KindDeliverdDevFlowsApi);
