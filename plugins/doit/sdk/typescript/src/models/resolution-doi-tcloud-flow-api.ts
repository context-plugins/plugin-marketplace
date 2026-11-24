import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResolutionDoiTCloudFlowApi = {
  Bound: "bound",
  Suggested: "suggested",
  WillCreate: "willCreate",
  Unbound: "unbound",
} as const;
export type ResolutionDoiTCloudFlowApi =
  | (typeof ResolutionDoiTCloudFlowApi)[keyof typeof ResolutionDoiTCloudFlowApi]
  | (string & {});

export const resolutionDoiTCloudFlowApiSchema: EnumSchema<ResolutionDoiTCloudFlowApi> =
  s.enumOf<ResolutionDoiTCloudFlowApi>(ResolutionDoiTCloudFlowApi);
