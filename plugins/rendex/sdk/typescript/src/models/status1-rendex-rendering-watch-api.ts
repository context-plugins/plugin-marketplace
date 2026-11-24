import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status1RendexRenderingWatchApi = {
  Active: "active",
  Paused: "paused",
} as const;
export type Status1RendexRenderingWatchApi =
  | (typeof Status1RendexRenderingWatchApi)[keyof typeof Status1RendexRenderingWatchApi]
  | (string & {});

export const status1RendexRenderingWatchApiSchema: EnumSchema<Status1RendexRenderingWatchApi> =
  s.enumOf<Status1RendexRenderingWatchApi>(Status1RendexRenderingWatchApi);
