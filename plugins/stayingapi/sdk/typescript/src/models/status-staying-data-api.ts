import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusStayingDataApi = {
  Ok: "ok",
  Failed: "failed",
  Skipped: "skipped",
} as const;
export type StatusStayingDataApi =
  | (typeof StatusStayingDataApi)[keyof typeof StatusStayingDataApi]
  | (string & {});

export const statusStayingDataApiSchema: EnumSchema<StatusStayingDataApi> =
  s.enumOf<StatusStayingDataApi>(StatusStayingDataApi);
