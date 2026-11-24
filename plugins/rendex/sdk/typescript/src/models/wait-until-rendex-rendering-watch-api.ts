import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WaitUntilRendexRenderingWatchApi = {
  Load: "load",
  Domcontentloaded: "domcontentloaded",
  Networkidle0: "networkidle0",
  Networkidle2: "networkidle2",
} as const;
export type WaitUntilRendexRenderingWatchApi =
  | (typeof WaitUntilRendexRenderingWatchApi)[keyof typeof WaitUntilRendexRenderingWatchApi]
  | (string & {});

export const waitUntilRendexRenderingWatchApiSchema: EnumSchema<WaitUntilRendexRenderingWatchApi> =
  s.enumOf<WaitUntilRendexRenderingWatchApi>(WaitUntilRendexRenderingWatchApi);
