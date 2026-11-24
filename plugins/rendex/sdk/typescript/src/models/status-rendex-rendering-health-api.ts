import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusRendexRenderingHealthApi = {
  Ok: "ok",
  Error: "error",
} as const;
export type StatusRendexRenderingHealthApi =
  | (typeof StatusRendexRenderingHealthApi)[keyof typeof StatusRendexRenderingHealthApi]
  | (string & {});

export const statusRendexRenderingHealthApiSchema: EnumSchema<StatusRendexRenderingHealthApi> =
  s.enumOf<StatusRendexRenderingHealthApi>(StatusRendexRenderingHealthApi);
