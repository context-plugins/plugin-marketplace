import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusDeliverdDevApprovalsApi = {
  Ok: "ok",
  Warning: "warning",
  Info: "info",
} as const;
export type StatusDeliverdDevApprovalsApi =
  | (typeof StatusDeliverdDevApprovalsApi)[keyof typeof StatusDeliverdDevApprovalsApi]
  | (string & {});

export const statusDeliverdDevApprovalsApiSchema: EnumSchema<StatusDeliverdDevApprovalsApi> =
  s.enumOf<StatusDeliverdDevApprovalsApi>(StatusDeliverdDevApprovalsApi);
