import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** DevCycle SDK type */
export const SdkType = {
  Api: "api",
  Server: "server",
  Client: "client",
  Mobile: "mobile",
} as const;
export type SdkType = (typeof SdkType)[keyof typeof SdkType] | (string & {});

export const sdkTypeSchema: EnumSchema<SdkType> = s.enumOf<SdkType>(SdkType);
