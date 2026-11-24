import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status2RendexRenderingWatchApi = {
  Active: "active",
  Paused: "paused",
  All: "all",
} as const;
export type Status2RendexRenderingWatchApi =
  | (typeof Status2RendexRenderingWatchApi)[keyof typeof Status2RendexRenderingWatchApi]
  | (string & {});

export const status2RendexRenderingWatchApiSchema: EnumSchema<Status2RendexRenderingWatchApi> =
  s.enumOf<Status2RendexRenderingWatchApi>(Status2RendexRenderingWatchApi);
