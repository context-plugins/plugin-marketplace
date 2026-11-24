import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SdkTypeDevCycleManagementResultsApi = {
  Client: "client",
  Server: "server",
  Mobile: "mobile",
  Api: "api",
} as const;
export type SdkTypeDevCycleManagementResultsApi =
  | (typeof SdkTypeDevCycleManagementResultsApi)[keyof typeof SdkTypeDevCycleManagementResultsApi]
  | (string & {});

export const sdkTypeDevCycleManagementResultsApiSchema: EnumSchema<SdkTypeDevCycleManagementResultsApi> =
  s.enumOf<SdkTypeDevCycleManagementResultsApi>(SdkTypeDevCycleManagementResultsApi);
