import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ModeBrowserUsePublicApiV4WalletsApi = {
  Test: "test",
  Live: "live",
} as const;
export type ModeBrowserUsePublicApiV4WalletsApi =
  | (typeof ModeBrowserUsePublicApiV4WalletsApi)[keyof typeof ModeBrowserUsePublicApiV4WalletsApi]
  | (string & {});

export const modeBrowserUsePublicApiV4WalletsApiSchema: EnumSchema<ModeBrowserUsePublicApiV4WalletsApi> =
  s.enumOf<ModeBrowserUsePublicApiV4WalletsApi>(ModeBrowserUsePublicApiV4WalletsApi);
