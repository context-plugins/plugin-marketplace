import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const KindDoiTCloudFlowApi = {
  Policy: "policy",
  SlackChannel: "slackChannel",
} as const;
export type KindDoiTCloudFlowApi =
  | (typeof KindDoiTCloudFlowApi)[keyof typeof KindDoiTCloudFlowApi]
  | (string & {});

export const kindDoiTCloudFlowApiSchema: EnumSchema<KindDoiTCloudFlowApi> =
  s.enumOf<KindDoiTCloudFlowApi>(KindDoiTCloudFlowApi);
