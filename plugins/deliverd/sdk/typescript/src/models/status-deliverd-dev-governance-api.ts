import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusDeliverdDevGovernanceApi = {
  Open: "open",
  Resolved: "resolved",
} as const;
export type StatusDeliverdDevGovernanceApi =
  | (typeof StatusDeliverdDevGovernanceApi)[keyof typeof StatusDeliverdDevGovernanceApi]
  | (string & {});

export const statusDeliverdDevGovernanceApiSchema: EnumSchema<StatusDeliverdDevGovernanceApi> =
  s.enumOf<StatusDeliverdDevGovernanceApi>(StatusDeliverdDevGovernanceApi);
