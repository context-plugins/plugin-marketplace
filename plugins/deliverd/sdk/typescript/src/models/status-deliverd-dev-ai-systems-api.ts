import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusDeliverdDevAiSystemsApi = {
  Active: "active",
  Retired: "retired",
} as const;
export type StatusDeliverdDevAiSystemsApi =
  | (typeof StatusDeliverdDevAiSystemsApi)[keyof typeof StatusDeliverdDevAiSystemsApi]
  | (string & {});

export const statusDeliverdDevAiSystemsApiSchema: EnumSchema<StatusDeliverdDevAiSystemsApi> =
  s.enumOf<StatusDeliverdDevAiSystemsApi>(StatusDeliverdDevAiSystemsApi);
