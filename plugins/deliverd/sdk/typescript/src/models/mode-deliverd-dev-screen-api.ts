import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ModeDeliverdDevScreenApi = {
  Enforce: "enforce",
  ReportOnly: "report_only",
} as const;
export type ModeDeliverdDevScreenApi =
  | (typeof ModeDeliverdDevScreenApi)[keyof typeof ModeDeliverdDevScreenApi]
  | (string & {});

export const modeDeliverdDevScreenApiSchema: EnumSchema<ModeDeliverdDevScreenApi> =
  s.enumOf<ModeDeliverdDevScreenApi>(ModeDeliverdDevScreenApi);
