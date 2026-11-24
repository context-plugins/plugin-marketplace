import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ModeDoiTCloudFlowApi = {
  Test: "test",
  Standard: "standard",
} as const;
export type ModeDoiTCloudFlowApi =
  | (typeof ModeDoiTCloudFlowApi)[keyof typeof ModeDoiTCloudFlowApi]
  | (string & {});

export const modeDoiTCloudFlowApiSchema: EnumSchema<ModeDoiTCloudFlowApi> =
  s.enumOf<ModeDoiTCloudFlowApi>(ModeDoiTCloudFlowApi);
